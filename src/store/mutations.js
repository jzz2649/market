import { local, isDef } from '@/shared/util'

const mutations = {
    updateGetway(state, value){
        if(isDef(value)){
            local.set('getway', value);
            state.getway = value;
        }else {
            local.remove('getway');
            state.getway = null;
        }
    },
    updateIp(state, value){
        if(isDef(value)){
            local.set('ip', value);
            state.ip = value;
        }else {
            local.remove('ip');
            state.ip = null;
        }
    },
    updatePort1(state, value){
        if(isDef(value)){
            local.set('port1', value);
            state.port1 = value;
        }else {
            local.remove('port1');
            state.port1 = null;
        }
    },
    updatePort2(state, value){
        if(isDef(value)){
            local.set('port2', value);
            state.port2 = value;
        }else {
            local.remove('port2');
            state.port2 = null;
        }
    },
    activeMarket(state, value){
        state.activeMarket = value;
    }    
}

export default mutations;