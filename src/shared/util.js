import Local from './local';
const fromCodePoint = String.fromCodePoint || String.fromCharCode;
const codePointAt = String.prototype.codePointAt;

let strCodePointAt = function(str, index){
    return str.codePointAt(index);
}

if(!codePointAt){
    strCodePointAt = function(str, index){
        return str.charCodeAt(index);
    }
}

/**
 * Base64字符串转成ArrayBuffer数组
 * @param {String} base64
 */
function base64ToArrayBuffer(base64){
    const binary_str = window.atob(base64);
    const len = binary_str.length;
    const bytes = new Uint8Array(len);
    for(let i = 0; i<len; i++){
        bytes[i] = strCodePointAt(binary_str, i);
    }
    return bytes.buffer;
}

/**
 * ArrayBuffer数组转成Base64字符串
 * @param {ArrayBuffer} buffer
 */

function arrayBufferToBase64 (buffer) {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += fromCodePoint(bytes[i])
    }
    return window.btoa(binary)
}

// 处理json
function jsonParse(str){
    try{
        return JSON.parse(str);
    }catch(e){
        return;
    }
}

//转成订阅的数据

const SunInstance = new window.proto.quotation.api.SubQuoteDetailRequest();

function toSubData(item){
    SunInstance.setExchangeno(item.exchangeNo);
    SunInstance.setCommodityno(item.commodityNo);
    SunInstance.setCommoditytype(item.commodityType);
    SunInstance.setContractno(item.contractNo);
    let buffer = arrayBufferToBase64(SunInstance.serializeBinary());
    return buffer;
}

//转换成kline查询数据
//转换为protot数据
const protoKline = new window.proto.quotation.api.GetKLineRequest();
/**
 * 查询kline数据
 * @param {Object} item 行情基础数据
 * @param {number} klineType K线类型
 * @param {timestamp} end 结束时间
 * @param {number} count 查询条数
 * @returns {string} base64数据 
 */
function toSearchKline(item, klineType , start,end){
    const { exchangeNo, commodityNo, commodityType, contractNo } = item;
    protoKline.setExchangeno(exchangeNo)
    protoKline.setCommodityno(commodityNo)
    protoKline.setCommoditytype(commodityType)
    protoKline.setContractno(contractNo)
    protoKline.setEndtime(end);
    protoKline.setType(klineType);
    // protoKline.setCount(count);
    protoKline.setBegintime(start);
    let base64 = arrayBufferToBase64(protoKline.serializeBinary());
    return base64;
}

//转成快照 proto
const SnapInstance = new window.proto.quotation.api.GetSnapshotRequest();
function toSnapData(item){
    const ContractKey = new window.proto.quotation.api.ContractKey();
    ContractKey.setExchangeno(item.exchangeNo);
    ContractKey.setCommodityno(item.commodityNo);
    ContractKey.setCommoditytype(item.commodityType);
    ContractKey.setContractno(item.contractNo);
    SnapInstance.addListcontract(ContractKey);
    let base64 = arrayBufferToBase64(SnapInstance.serializeBinary());
    SnapInstance.clearListcontractList();
    return base64;
}

//生成key以优化性能
function getKey(item){
    const { exchangeNo,
        commodityNo,
        commodityType,
        contractNo,} = item;
    return exchangeNo+'-'+commodityNo+'-'+commodityType+'-'+contractNo;
}

function toKey(key){
    const keys = key.split('-');
    return {
        exchangeNo: keys[0],
        commodityNo: keys[1],
        commodityType: keys[2],
        contractNo: keys[3]
    }
}

const throttle = (fn, wait) => {
    let timer = null
    let create = false
    let args = []
    const done = wait ? cb => setTimeout(cb, wait) : requestAnimationFrame
    const cancel = wait ? clearTimeout : cancelAnimationFrame
    return (...s) => {
        args = s
        if (!create) {
        create = true
        if (timer) cancel(timer)
        timer = done(() => {
            create = false
            fn(...args)
        })
        }
    }
}

const throttleQuequ = (fn, wait) => {
    let timer = null;
    let create = false;
    let args = [];
    return (s) => {
        args.push(s);
        if(!create){
            create = true;
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                create = false;
                const item = args;
                args = [];
                fn(item);
            }, wait)
        }
    }
}

const debounce = (fn, wait) => {
    let timer = null
    const done = wait ? cb => setTimeout(cb, wait) : requestAnimationFrame
    const cancel = wait ? clearTimeout : cancelAnimationFrame
    return (...s) => {
        if (timer) cancel(timer)
        timer = done(() => fn(...s))
    }
}

function toFloat(n){
    n = parseFloat(n);
    if(isNaN(n)){
        return 0;
    }
    return n;
}

function toNN(n, l){
    return toFloat(n.toFixed(l));
}

function getMPCL(mpc){
    mpc = String(mpc||1);
    const l = Number(mpc.split('e')[1] || 0);
    if(l){
        if(l>0){
            return 0;
        }
        return Math.abs(l);
    }
    const s = mpc.split('.')[1] || '';
    return s.length;
}

function toFixN(number, mpc){
    const len = getMPCL(mpc);
    return toNN(number, len);
}

function isUndef(v){
    return v === undefined || v === null;
}

function isDef(v){
    return v !== undefined && v !== null;
}

function compose(...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
  }

/**
 * ArrayBuffer数组转成proto
 */
// function deserializeBinary(arrayBuffer){
//     return proto.quotation.api.ListExchangeResponse.deserializeBinary(arrayBuffer);
// }

//序列化proto数据
const deserializeBinaryExchange = window.proto.quotation.api.ListExchangeResponse.deserializeBinary;
const deserializeBinaryCommodity = window.proto.quotation.api.ListCommodityResponse.deserializeBinary;
const deserializeBinaryContract = window.proto.quotation.api.ListContractResponse.deserializeBinary;
const deserializeBinarySubData = window.proto.quotation.api.SubQuoteDetailResponse.deserializeBinary;
const deserializeBinarySnapData = window.proto.quotation.api.GetSnapshotResponse.deserializeBinary;
const deserializeBinaryKline = window.proto.quotation.api.GetKLineResponse.deserializeBinary;

//时间戳转为string
function formatDate(timestamp, type){
    type = type || 'YY-MM-DD hh:mm:ss';
    var year, month, day, hours, minute, second, d, t;
    var date = new Date(timestamp||null);
    var fill = function (s, v, l){
        var _l = l - v.length;
            _l = _l > 0 ? _l : 0;
        return s.repeat(_l) + v.slice(0, l);
    }
    var len2 = function(v){
        v = v ? v.toString() : '';
        return fill('0', v, 2);
    }
    var _formatDate = function(d, t){
        var date = d ? (year + d + month + d + day) : '';
        var time = t ? (hours + t + minute + t + second) : '';
        return (date+' '+time).trim();
    }
    year = date.getFullYear();
    month = len2(date.getMonth() + 1);
    day = len2(date.getDate());
    hours = len2(date.getHours());
    minute = len2(date.getMinutes());
    second = len2(date.getSeconds());
    d = /^YY(.)MM.DD/.test(type) ? RegExp.$1 : undefined;
    t = /hh(.)mm.ss$/.test(type) ? RegExp.$1 : undefined;
    if(!d && !t) throw new Error('args type error,for example YY-MM-DD hh:mm:ss');
    return _formatDate(d, t);
}

const local = new Local();

export {
    local,
    toKey,
    isDef,
    isUndef,
    toFixN,
    toFloat,
    getKey,
    getMPCL,
    compose,
    throttle,
    debounce,
    jsonParse,
    toSubData,
    toSnapData,
    formatDate,
    throttleQuequ,
    fromCodePoint,
    strCodePointAt,
    toSearchKline,
    base64ToArrayBuffer,
    arrayBufferToBase64,
    deserializeBinaryExchange,
    deserializeBinaryCommodity,
    deserializeBinaryContract,
    deserializeBinarySubData,
    deserializeBinarySnapData,
    deserializeBinaryKline
}