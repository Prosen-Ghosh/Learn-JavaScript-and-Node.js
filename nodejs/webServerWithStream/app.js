var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type' : 'text/html'});
    //here 'res' is a writeable stream
    // so we can pipe a readable stream with a writeable stream
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    
}).listen(3000,'localhost');

console.log('Now Open Your Browser, And The URL Will Be: localhost:3000');