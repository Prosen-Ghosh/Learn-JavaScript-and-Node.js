var fs = require('fs');
var data = fs.readFileSync('readMe.txt','utf8');
console.log(data);

fs.appendFileSync('readMe.txt',data);
