const assert = require('assert');
const Tasker = require('../index.js');


describe('Stack',function(){
  it('create Stack', function(){
    it('new Stack', function(){
      const app = new Tasker();
      assert(app.constructor === Tasker);
      done();
    })
  });
  it('running task', function(done){
    const app = new Tasker();
    app.add(function(next){
      assert(true);
      done();
    })
    app.run();
  })
  it('set end callback', function(done){
    const app = new Tasker();
    app.setEnd(function(){
      assert(true);
      done();
    })
    app.run();
  })

  it('running task list', function(done){
    const arr = [];
    const app = new Tasker();
    app.add((next)=>arr.push(1) && next());
    app.add((next)=>arr.push(1) && next());
    app.add((next)=>arr.push(1) && next());
    app.run();
    assert.equal(arr.length, 3);
    done();
  })
  it('pass arguments', function(done){
    const arr = [];
    const app = new Tasker();
    app.add(function(next){
        arr.push(1)
        next('pass')
    })
    app.add(function(next,arg){
      assert(arg === 'pass');
      done()
    });
    app.run();
  })
  it('running async tasklist', function(done){
    const arr = [];
    const app = new Tasker();
    app.add((next)=>arr.push(1) && next());
    app.add((next)=>arr.push(1) && next());
    app.add(function(next){
      setTimeout(function(){
        arr.push(1)
        next()
      },1000)
    })
    app.add((next)=>arr.push(1) && next());
    app.setEnd(function(){
      assert.equal(arr.length, 4);
      done();
    })
    app.run();
  })
})