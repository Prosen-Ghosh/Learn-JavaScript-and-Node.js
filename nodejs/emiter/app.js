var Emitter = require('./Emitter');

var emit = new Emitter();

emit.on('hello',function(){
    console.log('someone says hello');
});

emit.on('hello',function(){
    console.log('Again someone says Hello');
});

emit.emit('hello');