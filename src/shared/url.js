import { isDef } from '@/shared/util';

const reqUrl = {}

function updateUrl(options){
    const { ip, port1, port2, host } = options;
    if(isDef(ip)&&isDef(port1)&&isDef(port2)){
        const BASE_IP = ip;//行情ip '101.132.179.84'
        const MARKET_URL = `http://${BASE_IP}:${port1}/quotation/`;//行情 4580
        const WS_URL = `ws://${BASE_IP}:${port2}/quotation/quotedetail/sub`; //合约订阅 4581
        reqUrl.WS_URL = WS_URL;
        reqUrl.list_commodity = MARKET_URL+'list_commodity';//交易类型
        reqUrl.list_contract = MARKET_URL + 'list_contract'; // 合约列表
        reqUrl.list_exchange = MARKET_URL + 'list_exchange'; //交易数据
        reqUrl.get_snapshot = MARKET_URL + 'get_snapshot'; // 行情快照
        reqUrl.get_kline = MARKET_URL + 'get_kline'; // K线图数据
    }
    if(isDef(host)){
        const HOST = host;//域名api.art606.com
        const BASE_URL = `http://${HOST}`;//基础路径
        const TRADE_WS_URL = `ws://${HOST}/trade/ws`;//交易端
        reqUrl.TRADE_WS_URL = TRADE_WS_URL;
        reqUrl.instrumentinfo = BASE_URL + '/contract/page'; // 查合约
        reqUrl.marketinfo = BASE_URL + '/market/page'; // 查询市场
        reqUrl.productinfo = BASE_URL + '/kind/page'; // 查品种
        reqUrl.get_code = BASE_URL + '/auth/code'; //获取验证码
        reqUrl.get_login = BASE_URL + '/auth/login'; //登陆
        reqUrl.get_entrust = BASE_URL + '/user/entrust';//当日委托
        reqUrl.get_position = BASE_URL + '/user/position'; // 持仓明细
        reqUrl.get_deal_info = BASE_URL + '/user/deal';//成交记录
        reqUrl.other_login = BASE_URL + '/auth/auth';//其他地方登陆
        reqUrl.funds = BASE_URL + '/cash/page';//获取出入金
        reqUrl.req_place_order = BASE_URL + '/trade/entrustInsertReq';//下单
    }
}

// updateUrl({
//     host: 'deapi.xtrader.com.cn'
// });

export {
    reqUrl,
    updateUrl
}
