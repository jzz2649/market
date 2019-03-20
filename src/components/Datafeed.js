import { RESOLUTIONS } from '@/shared/request';

export default class Datafeed {
    constructor(vue, options){
        this.vm = vue;
        this.options = options;
    }
    /**
     * @param {*Function} callback  回调函数
     * `onReady` should return result asynchronously.
     */
    onReady(callback){
        return new Promise((resolve, reject)=>{
            resolve(this.defaultConfiguration());
        }).then(data=>callback(data))
    }
    /**
     * @param {*String} symbolName  商品名称或ticker
     * @param {*Function} onSymbolResolvedCallback 成功回调 
     * @param {*Function} onResolveErrorCallback   失败回调
     * `resolveSymbol` should return result asynchronously.
     */
    resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
        return new Promise((resolve, reject) => {
            const symbolInfo = Object.assign({},this.defaultSymbol(), this.options);
            resolve(symbolInfo)
        }).then(data=>onSymbolResolvedCallback(data)).catch(err=>onResolveErrorCallback(err));
    }
    /**
   * @param {*Object} symbolInfo  商品信息对象
   * @param {*String} resolution  分辨率
   * @param {*Number} rangeStartDate  时间戳、最左边请求的K线时间
   * @param {*Number} rangeEndDate  时间戳、最右边请求的K线时间
   * @param {*Function} onDataCallback  回调函数
   * @param {*Function} onErrorCallback  回调函数
   */
    getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback,firstData) {
        this.vm.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback, firstData);
    }
    /**
     * 订阅K线数据。图表库将调用onRealtimeCallback方法以更新实时数据
     * @param {*Object} symbolInfo 商品信息
     * @param {*String} resolution 分辨率
     * @param {*Function} onRealtimeCallback 回调函数 
     * @param {*String} subscriberUID 监听的唯一标识符
     * @param {*Function} onResetCacheNeededCallback (从1.7开始): 将在bars数据发生变化时执行
     */
    subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
        this.vm.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback);
    }
    /**
     * 取消订阅K线数据
     * @param {*String} subscriberUID 监听的唯一标识符
     */
    unsubscribeBars(subscriberUID) {
        this.vm.unsubscribeBars(subscriberUID);
    }
    defaultConfiguration() {
        return {
            supports_search: false,
            supports_group_request: false,
            supported_resolutions: RESOLUTIONS,
            supports_marks: false,
            supports_timescale_marks: false
        }
    }
    /**
   * 默认商品信息
   */
  defaultSymbol() {
    return {
      'name': 'SHFE-RB',
      'timezone': 'Asia/Shanghai',
      'minmov': 1,
      'minmov2': 0,
      'pointvalue': 1,
      'fractional': false,
      'session': '24x7',
      'has_intraday': true,
      "has_weekly_and_monthly": true,
      'has_no_volume': false,
      'description': 'SHFE-RB',
      'pricescale': 1,
      'ticker': 'SHFE-RB',
      'exchange': 'SHFE',
      'pricescale': 100,
      'supported_resolutions': RESOLUTIONS
    }
  }
}