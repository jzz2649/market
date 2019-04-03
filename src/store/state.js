import { local, jsonParse } from '@/shared/util'
const state = {
    activeMarket:'',
    hostList: jsonParse(local.get('hostList'))||[],
    hostKey: local.get('hostKey')&&Number(local.get('hostKey'))
};

export default state;