const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start',()=>{
    console.log('Evento start disparado!');

})

console.log('Antes de disparar o evento start');
eventEmitter.emit('start');
console.log('Depois de disparar o evento start');