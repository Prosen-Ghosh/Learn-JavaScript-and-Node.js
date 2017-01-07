var http = require('http');

http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-Type' : 'application/json'});
    var obj = {
        firstname : 'Prosen',
        lastname : 'Ghosh'
    }
    res.end(JSON.stringify(obj));
}).listen(3000,'localhost');

console.log('Now Open Your Browser,URL Will Be: localhost:300');
//3000 is a port number