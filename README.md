M-Server is a mini http server like python SimpleHttpServer that without any dependencies;

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

