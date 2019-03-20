const BASE_TIME = 60*1000;
const typeToN = {
    '1': 1,
    '3': 3,
    '5': 5,
    '15': 15,
    '30': 30,
    '60': 60,
    '120': 120,
    '180': 180,
    '240': 240,
    '1D': 24*60,
    '1W': 7*24*60,
    '1M':30*24*60
}

//获取下一个周期k线
function getNextTime(type, prevData, data){
    const rate = typeToN[type]*BASE_TIME;
    let isUpdate = false;
    //初次数据
    if(prevData.first){
        prevData.first = false;
        prevData.totalVolume = data.totalVolume;
        data.volume = prevData.volume;
    }
    if(data.time>=prevData.time){
        isUpdate = true;
    }
    if(isUpdate){
        //更新使用新数据
        data.time = (parseInt(data.time/rate, 10)+1)*rate;
        prevData.volume = data.volume;
        prevData.time = data.time;
        prevData.low = data.close;
        prevData.high = data.close;
        prevData.open = data.close;
    }else{
        prevData.volume += data.totalVolume - prevData.totalVolume + data.volume;
        prevData.high=prevData.high>prevData.close?prevData.high:prevData.close;
        prevData.low=prevData.low>prevData.close?prevData.close:prevData.low;
        prevData.totalVolume = data.totalVolume;
    }
    prevData.close = data.close;
    const { low, high, open, close, time, volume } = prevData;
    return { low, high, open, close, time, volume };
}

export { getNextTime };