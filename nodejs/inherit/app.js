var EventEmitter = require('events');
var util = require('util');

function Hello(){
    this.helloworld = "Hello World!";
}

util.inherits(Hello,EventEmitter);

Hello.prototype.hello = function(data){
    console.log(this.helloworld);
    this.emit('hello',data);
}

var hello1 = new Hello();

hello1.on('hello',function(data){
    console.log("Someone Says Hello!: " + data);
});

hello1.hello('I Am Prosen');