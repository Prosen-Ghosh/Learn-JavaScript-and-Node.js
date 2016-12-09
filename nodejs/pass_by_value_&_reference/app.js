// pass by value
function fake_change(a){
    a = 2;
}

var a = 1; // primitive value
fake_change(a);
console.log('Example 1: ' + a);

// pass by reference
// object are pass by reference in javascript

function change(obj/* It Will point to the same memory that "obj" pointed*/){
    obj.a = 2;// the value of obj.a will change here.because it pointed the same memory address
}
obj = {
    a : 1
};
change(obj);
console.log('Example 2: ' + obj.a);