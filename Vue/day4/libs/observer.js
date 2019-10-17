class Observer {
  constructor(){
    this.list = {};
  }
  on(key,fn){
    if(!this.list[key]){
      this.list[key] = [];
    }
    this.list[key].push(fn);
  }
  emit(key,param){
    let fns = this.list[key];
    if(!fns || fns.length === 0){
      return false;
    }
    fn.forEach(fn=>{
      fn(param);
    })
  }
}

export default new Observer()