//object properties
var obj = {
    firstname : 'Prosen',
    lastname : 'Ghosh'
};

// this variable is holding the key name of the object "obj"
var name_of_the_property = 'lastname';

// here we can dynamically called the property
console.log(obj['firstname']);
console.log(obj[name_of_the_property]);