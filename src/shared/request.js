import axios from 'axios';
import { reqUrl } from './url';
import { toSearchKline, toFixN, isDef } from './util';
import {
    arrayBufferToBase64,
    base64ToArrayBuffer,
    deserializeBinaryExchange,
    deserializeBinaryCommodity,
    deserializeBinaryContract,
    deserializeBinarySnapData,
    deserializeBinaryKline
} from './util'

//订阅的周期
const RESOLUTIONS = ['1', '3', '5', '15', '30', '60', '120', '180', '240', '1D', '1W','1M'];

//k线的状态
// KMINUTE: 0
// KDAY: 1
// K5MINUTE: 2
// K15MINUTE: 3
// K30MINUTE: 4
// K1HOUR: 5
// K2HOUR: 6
// K3HOUR: 7
// K4HOUR: 8
// KWEEK: 9
// KMONTH: 10
// K3MINUTE: 11
// K10MINUTE: 12

const KLINE_TYPE = {
    '1': 0,
    '3': 11,
    '5': 2,
    '15': 3,
    '30': 4,
    '60': 5,
    '120': 6,
    '180': 7,
    '240': 8,
    '1D': 1,
    '1W': 9,
    '1M': 10,
}

//获取基础的行情数据
function getBaseData(url) {
    const list = new Uint8Array();
    return protoRequest(url, list);
}

//处理是否正确返回
function handleMid(res) {
    if (res.status === 200) {
        return res.data;
    }
    return Promise.reject(res.status);
}

//处理buffer
function toBuffer(data) {
    if (data) {
        const arrayBuffer = base64ToArrayBuffer(data);
        return arrayBuffer;
    }
    return base64ToArrayBuffer('');
}

/*
 *	Buffer数据请求方法
 *	@param {string} url 接口地址
 * 	@param {object} requestArr 请求参数序列化Uint8Array
 * 	@return {promise}
*/
function protoRequest(url, requestArr) {
    let base64;
    if (requestArr) {
        base64 = arrayBufferToBase64(requestArr);
    }
    return axios.post(url, base64).then(handleMid).then(toBuffer);
}

// ===行情===

//获取行情交易数据
function getExchangeData() {
    return getBaseData(reqUrl.list_exchange).then(data => {
        const obj = deserializeBinaryExchange(data);
        const list = obj.getListexchangeinfoList();
        const arrList = [];
        for (let i = 0, len = list.length; i < len; i++) {
            const item = list[i];
            arrList.push({
                exchangeNo: item.getExchangeno(),
                tradingTime: item.getTradingtimeList()
            })
        }
        return arrList;
    })
}
//品种属性列表
function getCommodityData() {
    return getBaseData(reqUrl.list_commodity).then(data => {
        const obj = deserializeBinaryCommodity(data);
        const map = obj.getMapcommodityMap();
        const allList = [];
        map.forEach(item => {
            const list = item.getListcommodityList();
            for (let i = 0, len = list.length; i < len; i++) {
                const info = list[i];
                const d = {
                    exchangeNo: info.getExchangeno(),
                    commodityNo: info.getCommodityno(),
                    commodityType: info.getCommoditytype(),
                    commodityName: info.getCommodityname(),
                    volunit: info.getVolunit(),
                    MPC: parseFloat(info.getMpc()).toString(),
                    offerDenominator: info.getOfferdenominator(),
                    centralizedBiddingSession: info.getCentralizedbiddingsessionList(),
                    tradingContinous: info.getTradingcontinousList()
                }
                allList.push(d);
            }
        })
        return allList;
    })
}

//合约列表
function getContractData() {
    return getBaseData(reqUrl.list_contract).then(data => {
        const obj = deserializeBinaryContract(data);
        const list = obj.getListcontractList();
        const arrList = [];
        for (let i = 0, len = list.length; i < len; i++) {
            const item = list[i];
            const exchangeNo = item.getExchangeno();
            const commodityNo = item.getCommodityno();
            const commodityType = item.getCommoditytype();
            const arr = item.getListcontractList();
            arrList.push({
                exchangeNo,
                commodityNo,
                commodityType,
                contractNos: arr
            })
        }
        return arrList;
    })
}

//行情快照
function getSnapshot(subData) {
    return axios.post(reqUrl.get_snapshot, subData, {
        headers: {
            'Content-Type': 'text/plain;charset=UTF-8',
            'Accept': '*/*'
        }
    }).then(handleMid).then(toBuffer).then(buffer => deserializeBinarySnapData(buffer).getListsnapshotList())
}

//查询kline数据
function getKlineData(item, klineType, start ,end, mpc) {
    const sendData = toSearchKline(item, klineType, start, end);
    return axios.post(reqUrl.get_kline, sendData).then(handleMid).then(toBuffer).then(buffer => deserializeBinaryKline(buffer)).then(protoObj => {
        // const exchangeNo = protoObj.getExchangeno();
        // const commodityNo = protoObj.getCommodityno();
        // const commodityType = protoObj.getCommoditytype();
        // const contractNo = protoObj.getContractno();
        // const lineType = protoObj.getType();
        const listKLineData = protoObj.getListklinedataList();
        const len = listKLineData.length;
        const newData = [];
        for(let i=0;i<len;i++){
            const item = listKLineData[i];
            let timeStampStr = item.getTimestamp();
            const minTime = timeStampStr.split(' ')[1];
            if(isDef(minTime)){
                if(!(/:/.test(minTime))){
                    timeStampStr += ':00'
                }
            }
            const time = new Date(timeStampStr).getTime();
            const open = toFixN(item.getOpenprice(), mpc);//开盘价
            const high = toFixN(item.getHighprice(), mpc);//最高价
            const low = toFixN(item.getLowprice(), mpc);//最低价
            const close = toFixN(item.getCloseprice(), mpc);//收盘价
            const volume = toFixN(item.getVolume(), mpc);//成交量
            newData.push({time, open, high, low, close, volume})
        }
        return newData;
    })
}

export {
    getBaseData,
    getExchangeData,
    getCommodityData,
    getContractData,
    getSnapshot,
    RESOLUTIONS,
    KLINE_TYPE,
    getKlineData
}