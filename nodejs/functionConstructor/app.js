//functions are special kind of object in javascript
function Person(firstname,lastname){
    // this is empty here...we can create whatever we want
    this.firstname = firstname;
    this.lastname = lastname;
}
function Address(address){
    this.address = address;
};
//prototype is a function object in javascript
// "Person" Is a function object and prototype is a Person object we can add item to this object
Person.prototype.print = function(){
    console.log('My Name Is ' + this.firstname + ' ' + this.lastname);
    console.log('I Live In ' + prosen.address.address);
};

Person.prototype.address = new Address('Dhaka Cantonment.');
// the new keyword will create an empty object and return the empty to it
// whenever we create an object of this function constructor it will search for the prototype 
var prosen = new Person('Prosen','Ghosh');


prosen.print();//this function is in prototype of "Person"

console.log(prosen.__proto__);// We can also check the prototype