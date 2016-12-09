var arr = [];

arr.push(1);
arr.push('Prosen');
arr.push(function(){
    console.log("Hello From Prosen");
});
arr.push(2);
arr.push('Anik');
arr.push(function(){
    console.log("Hello From Anik");
});

arr.forEach(function(item){
    if(typeof item === 'number' || typeof item === 'string'){
        console.log(item);
    }
    else if(typeof item === 'function'){
        item();
    }
});