import { local, isDef } from '@/shared/util'

const mutations = {
    activeMarket(state, value){
        state.activeMarket = value;
    },
    updateHostList(state, value){
        if(isDef(value)){
            local.set('hostList', JSON.stringify(value));
            state.hostList = value;
        }else{
            local.remove('hostList');
            state.hostList = [];
        }
    },
    updateHostKey(state, value){
        if(isDef(value)){
            local.set('hostKey', value);
            state.hostKey = value;
        }else {
            local.remove('hostKey');
            state.hostKey = null;
        }
    }
}

export default mutations;