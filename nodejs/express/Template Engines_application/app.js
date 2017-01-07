var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    
    res.render('index');
});

app.get('/car',function(req,res){
    
    res.render('car',{name:'BMW'});
});

app.listen(port,function(){
    console.log('App is listening On port 3000');
})