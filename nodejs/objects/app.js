//objects are key:value pair in javascript
var person = {
    //key     :   value
    firstname : 'Prosen',
    lastname : 'Ghosh',
    print : function(){
        console.log('My Name is ' + this.firstname + ' ' + this.lastname);
    }
};

person.print(); // you can access object key using . (dot) operator
person['print'](); // Or you can access dynamicaly using key name as a string like this