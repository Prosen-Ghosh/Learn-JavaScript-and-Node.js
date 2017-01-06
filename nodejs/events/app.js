var events = require('events');
var util = require('util');
var Person = require('./Person');

util.inherits(Person.Person,events.EventEmitter);

var Prosen = new Person.Person('Prosen');
var Qaium = new Person.Person('Qaium');
var Rizvi = new Person.Person('Rizvi');

var people = [Prosen,Qaium,Rizvi];

people.forEach(function(x){
  x.on('say',function(msg){
    console.log(msg);
  });
});

Prosen.emit('say','Hello Qaium')
Qaium.emit('say','Hello Prosen')
 