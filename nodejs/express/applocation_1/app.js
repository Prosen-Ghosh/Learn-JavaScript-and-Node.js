// At first write in you terminal: "npm install"  it will install all dependencies for this code
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    var html = '<html><head><title>Index</title></head><body>Hello Prosen.</body></html>';
    res.send(html);
});
app.get('/json',function(req,res){
    var obj = {
        firstname : 'Prosen Ghosh',
        lastname: 'Ghosh'
    };
    res.json(obj);
});
app.listen(port);