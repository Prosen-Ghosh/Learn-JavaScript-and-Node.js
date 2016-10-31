function forLoop(){
  for(i = 0; i <= 10; i++){
    console.log(i);
  }
}
function whileLoop(){
  i = 11;
  while(i <= 20){
    console.log(i);
    i++;
  }
}
function doWhileLoop(){
  do{
    i = 21;
    console.log(i); // It Will Execute one
  }while(i < 21);
}
forLoop();
whileLoop();
doWhileLoop();
