'use strict'

var Hello = require('./hello');



var hello1 = new Hello();

hello1.on('hello',function(data){
    console.log('Who Says Hello!: ',data);
});

hello1._hello('I Am Prosen');