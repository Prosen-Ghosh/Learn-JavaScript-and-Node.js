var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname + '/public'));

app.get('/',function(req,res){
    var html = '<html><head><link href=assets/style.css type=text/css rel=stylesheet><title>Index</title></head><body><h1>Hello Prosen</h1></body></html>';
    res.send(html);
});

app.listen(port,function(){
    console.log('App is listening On port 3000');
})