export default class Socket{
    constructor(options){
        // 0:未创建,1:连接,2:连接没数据,-1:连接失败
        this.connectState = 0;
        this.time = 15000;
        this.loop = false;
        this.listener = {};
        Object.assign(this,options);
    }
    create(){
        const ws = new WebSocket(this.url);
        ws.onopen = evt => this.onOpen(evt);
        ws.onclose = evt => this.onClose(evt);
        ws.onerror = evt => this.onError(evt);
        ws.onmessage = evt => this.onMessage(evt.data);
        this.ws = ws;
        if(!this.loop){
            this.loop = true;
            this.reconnection();
        }
    }
    on(type, handle){
        this.listener[type] = handle;
    }
    checkOpen(){
        return this.connectState === 1;
    }
    emit(evt){
        const callback = this.listener[evt.type];
        if(callback) callback(evt.data);
    }
    onOpen(evt){
        this.connectState = 1;
        this.emit({type:'open'})
    }
    onClose(evt){
        this.connectState = -1;
    }
    onMessage(data){
        this.connectState = 1;
        this.emit({
            type:'message',
            data
        })
    }
    reconnection(){
        this.heartBeatTimer = setInterval(()=>{
            if(this.connectState===-1){
                this.create();
            }else if(this.connectState===2){
                this.ws.close();
                this.create();
            }else if(this.connectState===1){
                this.emit({type:'ping'})
                this.connectState = 2;
            }
        },this.time);
    }
    send(data){
        this.ws.send(data);
    }
    destroy(){
        if(this.heartBeatTimer){
            clearInterval(this.heartBeatTimer)
        }
        this.ws.close();
        this.listener = {};
        this.connectState = 0;
        this.loop = false;
        this.ws = null;
    }
    onError(evt){
        this.connectState = -1;
    }
}
