Mini task runner that can support async。
<p align="center">
    <a href="https://circleci.com/gh/nunnly/m-tasker/tree/master"><img src="https://img.shields.io/circleci/project/nunnly/m-tasker/master.svg" alt="Build Status"></a>
    <a href="https://codecov.io/github/nunnly/m-tasker?branch=master"><img src="https://img.shields.io/codecov/c/github/nunnly/m-tasker/master.svg" alt="Coverage Status"></a>
    <a href="https://www.npmjs.com/package/m-tasker"><img src="https://img.shields.io/npm/dt/m-tasker.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/m-tasker"><img src="https://img.shields.io/npm/v/m-tasker.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/m-tasker"><img src="https://img.shields.io/npm/l/m-tasker.svg" alt="License"></a>
     
</p>
## useage

Install

> npm install m-tasker


```javascript
//require m-tasker
const Tasker = require('m-taker');

const app = new Tasker();

// add a task;
app.add(function(next){
  //dosomething 
  next(123,222);
})

// you can pass many arguments like this;
app.add(function(next, ...args){
  console.log(args)
  // => [123,222]
})

app.setEnd(function(...arg){
  //when tasks were ended;
  //callback
})
app.run()
```

## API

### add

```javascript
// must be called next() when task was done;
 Tasker.add(function(next){next()})
```

### setEnd
```javascript
  // task list completed
  Tasker.setEnd(function(args){
    //doString
  })
```

### run
> run tasklist


