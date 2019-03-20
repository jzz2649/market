import { throttle } from '@/shared/util'

const delay = throttle((context, key, ...v)=>{
  context.commit(key, ...v);
})

const actions = {
    activeKey(context, value){
        delay(context, "activeMarket", value);
    }
};
  
export default actions;