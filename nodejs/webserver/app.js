var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello Prosen Ghosh.\n');
}).listen(3000,'localhost');

console.log('Now Open Your Browser,and URL will be: localhost:3000');