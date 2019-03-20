<template>
  <div class="main">
    <div class="main-market">
      <v-market :list="showList" :checkKey="checkKey" @select="selectHandle"></v-market>
    </div>
    <div class="main-kline">
      <v-kline :subItem="klineSelect" :subData="subData"></v-kline>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { reqUrl, updateUrl } from "@/shared/url";
import Socket from "@/shared/socket";
import {
  toSubData,
  toSnapData,
  getKey,
  jsonParse,
  toFixN,
  isDef,
  isUndef,
  throttle,
  getMPCL,
  throttleQuequ,
  deserializeBinarySubData
} from "@/shared/util";
import {
  getCommodityData,
  getContractData,
  getExchangeInfo,
  getSnapshot
} from "@/shared/request";

import Market from "./Market";
import Kline from "./Kline";

export default {
  components: {
    "v-market": Market,
    "v-kline": Kline
  },
  computed:{
    ...mapGetters([
      'ip',
      'port1',
      'port2'
    ])
  },
  data() {
    return {
      klineSelect: null, //选中要展示的kline
      showList: [],
      subData: [],
      checkKey: "", //当前选中的key
      defaultSelect: 0//默认展示第一个
    };
  },
  created(){
    this.cacheInfo = Object.create(null);
  },
  mounted() {
    if(isUndef(this.ip)||isUndef(this.port1)||isUndef(this.port2)){
        this.$router.replace('/');
        return;
    }
    updateUrl({
        ip: this.ip,
        port1: this.port1,
        port2: this.port2
    })
    this.socket = new Socket({
        url: reqUrl.WS_URL
      });
    const ping = () => {
      if (this.socket.checkOpen()) {
        const data = JSON.stringify({ ping: Date.now() });
        this.socket.send(data);
      }
    };
    this.socket.on("ping", ping);
    this.socket.on("open", ping);
    this.socket.on("message", data => {
      this.message(data);
    });
    this.socket.create();
    //缓存数据
    this.cache = Object.create(null);

    this.klineQuequ = []; //保存一段时间websocket推送;
    const FRESHEN_TIME = 200;//多久才刷新一次数据
    this.handleKlineQ = throttleQuequ(list => {
      this.subData = list;
    }, FRESHEN_TIME);

    this.handleInfoQ = throttleQuequ(list => {
      this.$emit('updateList', list);
    }, FRESHEN_TIME);

    this.handleShow = throttle(() => {
      for (let i = 0, len = this.showList.length; i < len; i++) {
        const item = this.showList[i];
        const cache = this.cache[item.key];
        if (cache.last !== item.last || cache.rise !== item.rise) {
          const newData = {
            last: cache.last,
            rise: cache.rise,
            fixLast: cache.last.toFixed(cache.fixLen),
            fixRise: null
          };
          if(isDef(newData.rise)){
            newData.fixRise = cache.rise.toFixed(cache.fixLen)
          }
          this.$set(this.showList, i, Object.assign({}, item, newData));
        }
      }
    }, FRESHEN_TIME);

    //品种属性
    Promise.all([
      getCommodityData(),
      //合约列表
      getContractData(),
      getExchangeInfo()
    ]).then(data => {
      let checkKey = ""; //选中的key
      const set = {};
      const set1 = {};
      const showList = [];
      const list = data[2].slice(0);
      for (let item of data[0]) {
        const key = item.exchangeNo + "-" + item.commodityNo;
        set[key] = {
          name: item.commodityName,
          type: item.commodityType,
          mpc: item.MPC,
          tradingContinous: item.tradingContinous
        };
      }
      for (let item of data[1]) {
        const key = item.exchangeNo + "-" + item.commodityNo;
        set1[key] = item.contractNos;
      }
      for (let i = list.length - 1; i >= 0; i--) {
        const item = list[i];
        const key = item.marketName + "-" + item.kindCode;
        const codes = set1[key];
        const code = item.contractCode;
        const curData = set[key];
        if (codes.includes(code)) {
          list[i] = Object.assign({}, item, {
            commodityName: curData.name,
            commodityType: curData.type,
            mpc: curData.mpc,
            tradingContinous: curData.tradingContinous
          });
        } else {
          list.splice(i, 1);
        }
      }
      this.infoListLength = list.length;
      list.forEach((item, index) => {
        const exchangeNo = item.marketName;
        const commodityNo = item.kindCode;
        const commodityType = item.commodityType;
        const contractNo = item.contractCode;
        const tradingContinous = item.tradingContinous;
        const subData = {
          exchangeNo,
          commodityNo,
          commodityType,
          contractNo
        };
        const key = getKey(subData);
        showList.push(
          Object.assign({ key, name: item.commodityName }, subData)
        );
        this.cache[key] = Object.assign(
          { tradingContinous, key, mpc: item.mpc, fixLen: getMPCL(item.mpc) },
          subData
        );
        this.wssub(subData);
        //默认选中第一个
        if (index === this.defaultSelect) {
          checkKey = key;
        }
      });
      this.showList = showList;
      this.selectHandle(checkKey);
    });
  },
  methods: {
    message(data) {
      const obj = jsonParse(data) || {};
      if (obj.data) {
        const item = deserializeBinarySubData(obj.data).getQuotation();
        if (item) {
          const list = item.getListcontentList();
          if (list && list.length) {
            const exchangeNo = item.getExchangeno();
            const commodityNo = item.getCommodityno();
            const commodityType = item.getCommoditytype();
            const contractNo = item.getContractno();
            const key = getKey({
              exchangeNo,
              commodityNo,
              commodityType,
              contractNo
            });
            const cache = this.cache[key];
            if (cache) {
              for (const li of list) {
                const timestamp = li.getTimestamp();
                const basic = li.getBasic();
                const additional = li.getAdditional();
                const mpc = cache.mpc;
                cache.time = new Date(
                  li.getTimestamp()
                ).getTime(); //时间戳
                if (basic) {
                  cache.last = toFixN(basic.getLastprice(), mpc); // 最新价
                  cache.high = toFixN(basic.getHighprice(), mpc); // 最高价
                  cache.low = toFixN(basic.getLowprice(), mpc); // 最低价
                  cache.totalVolume = basic.getTotalvolume(); //成交量
                }
                if (additional) {
                  cache.preSettle = toFixN(additional.getPresettleprice(), mpc);
                  cache.open = toFixN(additional.getOpenprice(), mpc);
                  if (isDef(cache.last)) {
                    cache.rise = toFixN(cache.last - cache.preSettle, mpc); //涨跌=最新价-昨结
                  }
                }
              }
            }
            this.handleShow();
            this.handleInfoQ({
              last:cache.last,
              key: exchangeNo+'-'+commodityNo
            })
            if (key === this.checkKey) {
              const { key, time, open, high, low, last: close, volume, totalVolume } = cache;
              const klineData = {
                key,
                time,
                open,
                high,
                low,
                close,
                volume,
                totalVolume
              };
              this.handleKlineQ(klineData);
            }
          }
        }
      }
    },
    wssub(item) {
      const reqData = toSnapData(item);
      getSnapshot(reqData).then(list => {
        for (let item of list) {
          const exchangeNo = item.getExchangeno(); // 交易所编号
          const commodityNo = item.getCommodityno(); // 品种编号
          const commodityType = item.getCommoditytype(); // 品种类型
          const contractNo = item.getContractno(); // 合约编号
          const newData = {
            exchangeNo,
            commodityNo,
            commodityType,
            contractNo
          };
          const key = getKey(newData);
          const cache = this.cache[key];
          const last = item.getLast(); //最新价
          const preSettle = item.getPresettle(); //昨结
          const open = toFixN(item.getOpen(), mpc);//开盘价
          const high = toFixN(item.getHigh(), mpc);//最高价格
          const low = toFixN(item.getLow(), mpc);//最低价
          const volume = item.getVolume();//成交量
          const lastVolume = item.getLastvolume();//最新成交量
          const mpc = cache.mpc;
          if (last > 0 && preSettle > 0) {
            cache.rise = toFixN(last - preSettle, mpc);
          }
          cache.last = toFixN(last, mpc);
          cache.open = open;
          cache.high = high;
          cache.low = low;
          cache.volume = lastVolume;//最新成交量
          cache.totalVolume = volume;//所有成交量
          const subData = toSubData(newData);
          const data = JSON.stringify({ type: "sub", data: subData });
          if(this.socket.checkOpen()){
            this.socket.send(data);
          }
          this.cacheInfo[exchangeNo+'-'+commodityNo] = cache.last;
        }
        this.infoListLength--;
        if(this.infoListLength===0){
          this.handleShow();
        }
      });
    },
    selectHandle(key) {
      const cache = this.cache[key];
      const {
        commodityNo,
        commodityType,
        contractNo,
        exchangeNo,
        mpc,
        tradingContinous
      } = cache;
      const session = tradingContinous.reduce((a, b) => {
        const t = b.replace(/:/g, "");
        let cut = a ? "," : "";
        a += cut + t;
        return a;
      }, "");
      const subItem = {
        commodityNo,
        commodityType,
        contractNo,
        exchangeNo,
        mpc,
        session
      };
      this.klineSelect = subItem;
      this.checkKey = key;
      this.$store.dispatch("activeKey", key);
    }
  }
};
</script>

<style scoped>
.main,
.main-market {
  height: 100%;
}
.main {
  display: flex;
  padding: 10px 5px;
  background: #040f1a;
  min-width: 1200px;
}
.main-market {
  flex: 0 0 300px;
  color: #ddd;
}
.main-kline {
  flex: auto;
}
</style>
