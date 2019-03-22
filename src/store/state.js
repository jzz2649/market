import { local } from '@/shared/util'
const state = {
    activeMarket:'',
    ip: local.get('ip'),
    port1: local.get('port1'),
    port2: local.get('port2')
};

export default state;