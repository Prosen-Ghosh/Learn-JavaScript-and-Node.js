'use strict'

class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    hello(){
        console.log(`Hello From ${this.firstname} ${this.lastname}`);
    }
}

var prosen = new Person('Prosen','Ghosh');
prosen.hello();


/*
function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname= lastname;
}

Person.prototype.hello = function(){
    console.log(`Hello! From ${this.firstname} ${this.lastname}`);
}

var prosen = new Person('Prosen','Ghosh');
prosen.hello();
*/

// This Two Thing Will Work Exactly Same Way