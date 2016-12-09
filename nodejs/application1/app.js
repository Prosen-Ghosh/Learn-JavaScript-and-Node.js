var express = require('express');

var app = express();

app.get('/',function(request,response){
  response.send('This is The Home Page 2d Time.')
});
app.get('/hello',function(request,response){
  response.send('Hello Prosen.')
});

app.get('/profile/:id',function(request,response){
  response.send('Your are Looking For User Id: '+request.params.id);
});
app.listen(3000);
