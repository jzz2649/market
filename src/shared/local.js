function Local(store){
    let local = Object.create(null);
    let length = 0;
    const event = [];
    const change = () => {
      event.forEach(fn => {
        fn.call(storage, storage);
      })
    }
    const storage = {
      set(k, v) {
        if(typeof v !== 'string'){
          v = String(v);
        }
        if(local[k] === v){
          return;
        }
        if(local[k] === undefined){
          ++length;
        }
        local[k] = v;
        localStorage.setItem(k, v);
        change();
      },
      get(k) {
        if(local[k] === undefined){
          return null;
        }
        return local[k];
      },
      getAll(){
        return Object.assign({}, local);
      },
      remove(k) {
        if(local[k] === undefined){
          return;
        }
        --length;
        delete local[k];
        localStorage.removeItem(k);
        change();
      },
      clear() {
        if(length === 0){
          return;
        }
        length = 0;
        local = Object.create(null);
        localStorage.clear();
        change();
      },
      on(fn){
        const index = event.indexOf(fn);
        if(index > -1){
          return;
        }
        event.push(fn);
      },
      off(fn){
        const index = event.indexOf(fn);
        if(index > -1){
          event.splice(index, 1);
        }
      },
      get length(){
        return length;
      }
    }
    Object.keys(localStorage).forEach(k=>{
        storage.set(k, localStorage.getItem(k));
    })
    if(typeof store === 'object' && store !== null){
      Object.keys(store).forEach(k=>{
        storage.set(k, store[k]);
      })
    }
    return storage;
  }

  export default Local;