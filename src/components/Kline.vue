<template>
    <div id="trade-view"></div>
</template>

<script>
import Datafeed from './Datafeed';
import { mapGetters } from "vuex";
import { KLINE_TYPE, getKlineData } from '@/shared/request';
import { formatDate, getMPCL } from '@/shared/util';
import { getNextTime } from './filter';
export default {
    computed: {
        ...mapGetters(["activeKey"])
    },
    props:{
        subItem: Object,
        subData: Array
    },
    data(){
        return {
            isCreateTv: false
        }
    },
    created(){
        this.subscribes = Object.create(null);
        this.prevItem = Object.create(null);
    },
    watch:{
        subItem(item){
            if(item){
                if(this.isCreateTv){
                    this.widget.remove();
                    this.isCreateTv = false;
                }
                const name = item.commodityNo+'-'+item.contractNo;
                let len = getMPCL(item.mpc);
                let pricescale = 1;
                while(len--){
                    pricescale *= 10;
                }
                const options = {
                    session: item.session,
                    name,
                    pricescale,
                    description: name,
                    ticker: name,
                    exchange: item.exchangeNo
                }
                this.createTv(options);
            }
        },
        subData(list){
            if(list.length>0){
                for(const key in this.subscribes){
                    let curTime = 0;
                    const mergeList = [];
                    const resolution = this.subscribes[key].resolution;
                    for(let i=0,l=list.length;i<l;i++){
                        const item = list[i];
                        const newItem = getNextTime(resolution, this.prevItem, item)
                        if(newItem.time !==curTime){
                            curTime = newItem.time;
                            mergeList.push(newItem);
                        }
                    }
                    if(mergeList.length===1){
                        for(const key in this.subscribes){
                            this.subscribes[key].onRealtimeCallback(mergeList[0]);
                        }
                    }else if(mergeList.length>1){
                        for(const item of mergeList){
                            for(const key in this.subscribes){
                                this.subscribes[key].onRealtimeCallback(item);
                            }
                        }
                    }
                }
            }
        }
    },
    methods:{
        createTv(options){
            this.widget = new window.TradingView.widget({
                symbol: 'RB',
                interval: '1',
                container_id: 'trade-view',
                datafeed: new Datafeed(this, options),
                library_path: 'static/tradeview/charting_library/',
                disabled_features: ['header_symbol_search','header_fullscreen_button','header_undo_redo','header_compare','header_indicators','header_settings','header_screenshot','timeframes_toolbar','go_to_date'],
                enabled_features: [],
                drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
                width: '100%',
                height: '100%',
                timezone: 'Asia/Shanghai',
                locale: 'zh',
                debug: false,
                toolbar_bg: '#040f1a',
                overrides: {
                    "paneProperties.background": "#040f1a",
                    "paneProperties.vertGridProperties.color": "#1b232b",
                    "paneProperties.horzGridProperties.color": "#1b232b",
                    "symbolWatermarkProperties.transparency": 90,
                    "scalesProperties.textColor" : "#AAA"
                }
            })
            this.widget.onChartReady(()=>{
                this.isCreateTv = true;
                // this.activeChart=this.widget.activeChart();
            })
        },
        getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onDataCallback, onErrorCallback, firstData){
            const item = this.subItem;
            const klineType = KLINE_TYPE[resolution];
            let startTime = formatDate(rangeStartDate*1000);
            let endTime = formatDate(rangeEndDate*1000);
            getKlineData(item,klineType,startTime,endTime, this.subItem.mpc).then(list=>{
                if(firstData){
                    this.prevItem = Object.assign({first: true},list[list.length-1]);
                }
                if(list.length>0){
                    onDataCallback(list,{noData: false})
                }else{
                    onDataCallback([],{noData: true})
                }
            }).catch(()=>{
                onDataCallback([],{noData: true})
            })
        },
        subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
            this.subscribes[subscriberUID] = {
                symbolInfo,
                resolution,
                onRealtimeCallback,
                onResetCacheNeededCallback
            }
        },
        unsubscribeBars(subscriberUID) {
            delete this.subscribes[subscriberUID];
        }
    }
}
</script>

<style scoped>
    #trade-view {
        height: 100%;;
    }
</style>
