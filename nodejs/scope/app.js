'use strict'
var firstname = 'Anik';

//Immediatly invoked function
(function(){
    var firstname = 'Prosen';// this variable is only accessable to this function
    console.log(firstname); // This will print "Prosen"
}());

console.log(firstname); // this will print "Anik"

// function variable is only accessable to taht function
var test = function(){
  
    //This is an inner function
    (function(){
        var city = 'Dhaka';
        console.log(city);
    }());
    //console.log(city); // This line will through an error
};
test();
