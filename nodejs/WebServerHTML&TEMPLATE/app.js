var http = require('http');

var fs = require('fs');
http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type' : 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html','utf8');
    var hello = "Hello Prosen Ghosh!";
    html = html.replace('{Hello}',hello);
    res.end(html);
}).listen(3000,'localhost');

console.log('Now Open Your Browser, And The URL Will Be: localhost:3000');