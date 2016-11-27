var a = 1;
var s = "1";

if(a == s)console.log("This line will execute."); //this will check only the value
if(a === s)console.log("This line will never execute.");//this will check the value and variable type

s = "12"
if(a == s)console.log("Now This line will Not execute.");
