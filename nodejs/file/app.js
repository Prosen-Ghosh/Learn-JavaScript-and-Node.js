var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt','utf8');

console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt','utf8',function(err,data){
    //by defult err should be in first parameter of the callback function, if it has some error it will return the error or it will return null
    if(err !== null){
        console.log("ERROR: " + err);
    }
    else console.log(data);
});

// this line will print before the greet2 print
console.log('Done');