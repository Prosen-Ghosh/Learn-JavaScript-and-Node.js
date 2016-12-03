var http = require('http');
var fs = require('fs');

var server = http.createServer(function(equest,response){
  response.writeHead(200,{'Content-Type':'text/plain'});
  var readStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
  readStream.pipe(response);
});

server.listen(3000,'127.0.0.1');
console.log("Server Is Running");
