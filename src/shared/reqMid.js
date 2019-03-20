import getV from 'get-ov';
import store from '@/store';

export default function reqMid(data){
    const code = Number(getV(data)('code'));
    const msg = getV(data)('message');
    let isError = false;
    if(code === 1010){
        isError = true;
        // unLogin();
    }
    if(isError){
        return Promise.reject(msg);
    }
    return data;
}

// export function unLogin(){
//     store.commit('updateLogin', null);
//     store.commit('updateToken', null);
//     store.commit('updateAssetId', null);
//     store.commit('updateUserName', null);
//     store.commit('updateOperatorId', null);
// }