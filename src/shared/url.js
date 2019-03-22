import { isDef } from '@/shared/util';

const reqUrl = {}

function updateUrl(options){
    const { ip, port1, port2 } = options;
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
}

export {
    reqUrl,
    updateUrl
}
