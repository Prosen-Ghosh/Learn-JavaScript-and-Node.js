var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/html'});
  var readMe = fs.createReadStream(__dirname + '/index.html');
  readMe.pipe(response);
});

server.listen(3000,'127.0.0.1');
