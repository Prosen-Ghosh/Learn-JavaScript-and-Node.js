var http = require('http');

var server = http.createServer(function(request,response){
  console.log('Requested from: ' + request.url);
  response.writeHead(200,{'Content-type': 'text/plain'});
  response.end('Hello');
});

server.listen(3000,'127.0.0.1');
console.log('lisrening...')
