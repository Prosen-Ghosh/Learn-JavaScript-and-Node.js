var s = "10";
var n = s/2; //convert string to a number
console.log(typeof s);
console.log(typeof n);
console.log(n);

s = "100";
n = s*1; //convert string to a number
console.log(typeof s);
console.log(typeof n);
console.log(n);

s = "101 a";
n = s*1; //conversion fails
console.log(typeof s);
console.log(typeof n);
console.log(n); // result should NaN
