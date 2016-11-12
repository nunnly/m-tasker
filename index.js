class Tasker {
  constructor(){
    this._stack = [];
    this._end = function(){};
    return this;
  }
  add (task) {
    const stack = this._stack;
    stack.push(task)
  }
  step(i,...args){
    const self = this;
    const length = this._stack.length - 1;
     
    const task = this._stack[i];
    const step = this.step;
    task.call(self,function(...args){
        if(i < length){
          step.apply(self,[i+1,...args])
        }else{
          self.end(...args);
        }
    },...args)
  }
  end () {
    this._end();
  }
  setEnd(fn){
    if(typeof fn === 'function'){
      this._end = fn;
    }else{
      throw new Error('setEnd must receive a function');
    }
  }
  run () {
    if(this._stack.length === 0){
      this.end();
      return;
    }
    this.step(0);
  }
}
module.exports = Tasker;