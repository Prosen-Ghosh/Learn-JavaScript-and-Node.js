var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    var html = '<html><head><title>Index</title></head><body><h1>Hello Prosen</h1></body></html>';
    res.send(html);
});
app.get('/person/:id',function(req,res){
    var html = `<html><head><title>Index</title></head><body><h1>Hello Prosen ${req.params.id}</h1></body></html>`;
    res.send(html);
});

app.get('/json',function(req,res){
    var obj = {
        firstname : 'Prosen',
        lastname : 'Ghosh'
    }
    res.json(obj);
});

app.listen(port,function(){
    console.log('App listening on port 3000!')
})