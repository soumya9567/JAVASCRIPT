const EventEmitter = require('events');
const eventemitter = new EventEmitter();
eventemitter.on('greet',(name)=>{     //create an event listener for a greet event
    console.log(`hello,${name}!`);
});
//emitt the greet event with data
eventemitter.emit('greet','ramu');
eventemitter.emit('greet','raju')