var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
  if(request.url === '/home' || request.url === '/'){
    response.writeHead(200,{'Content-Type':'text/html'});
    var html = fs.createReadStream(__dirname + '/index.html');
    html.pipe(response);
  }
  else{
    response.writeHead(404,{'Content-Type':'text/html'});
    var html = fs.createReadStream(__dirname + '/error404.html');
    html.pipe(response);
  }
});

server.listen(3000,'127.0.0.1');
