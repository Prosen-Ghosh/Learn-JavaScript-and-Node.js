var person = {
    firstname : '',
    lastname : '',
    hello : function(){
        return this.firstname + ' ' + this.lastname;
    }
};

var prosen = Object.create(person);

prosen.firstname = 'Prosen';
prosen.lastname = 'Ghosh';
console.log(prosen.hello());