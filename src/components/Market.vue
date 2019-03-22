<template>
    <div class="tradeList">
        <a-row class="header">
            <a-col :span="item.span" v-for="(item, index) in titleList" :key="index">{{item.name}}</a-col>
        </a-row>
        <div class="list-content">
            <div @click="handleClick(index, item)" v-for="(item, index) in list" :key="item.key">
                <a-row class="list-item" :class="{active:item.key===checkKey}">
                    <a-col :span="10">{{item.name+item.commodityNo+item.contractNo}}</a-col>
                    <a-col :span="8"><span :class="{red:item.rise>0,green:item.rise<0}">{{toShow(item.last>0?item.fixLast:'--')}}</span></a-col>
                    <a-col :span="6"><span :class="{red:item.rise>0,green:item.rise<0}">{{toShow(item.fixRise)}}</span></a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>
import { isDef } from '@/shared/util'
export default {
    props:{
        list: Array,
        checkKey: String
    },
    data(){
        return {
            titleList: [{name:'商品',span:10}, {name:'最新价',span:8}, {name:'涨跌',span:6}]
        }
    },
    mounted(){
    },
    methods:{
        handleClick(index, item){
            if(this.checkKey !== item.key){
                this.$emit('select', item.key);
            }
        },
        toShow(v){
            if(isDef(v)){
                return v;
            }
            return '--';
        }
    }
}
</script>

<style scoped>
    .tradeList {
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header {
        flex: 0 0 30px;
        line-height: 30px;
    }
    .list-content {
        flex: auto;
        height: 100%;
        font-size: 12px;
        overflow-y: auto;
    }
    .list-item {
        line-height: 30px;
    }
    .list-item:hover{
        background: #757575;
    }
    .active {
        background: #4b4b4b;
    }
    .red {
        color: #ff3c39;
    }
    .green {
        color: #00e700;
    }
</style>

