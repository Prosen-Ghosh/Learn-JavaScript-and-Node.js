'use strict'

var EventEmitter = require('events');

module.exports = class Hello extends EventEmitter{
    constructor(){
        super();
        this.helloworld = "Hello World";
    }
    _hello(data){
        console.log(this.helloworld);
        this.emit('hello',data);
    }
}