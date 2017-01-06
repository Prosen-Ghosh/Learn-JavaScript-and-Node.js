var Emitter = require('events');
var Type = require('./eventType').type;

var emir = new Emitter();

emir.on(Type.HELLO,function(){
    console.log('Someone Says Hello.');
});
emir.on(Type.HELLO,function(){
    console.log('Someone Says Hello Again.');
});

emir.emit(Type.HELLO);