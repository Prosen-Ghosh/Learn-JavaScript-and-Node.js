# Scope

Scope means variable access. A Simple Example of Scope Is Given Below.

### Scope Example 1

```javascript

//parent scope/global scope

var a = 2; // a is declared and initialize globally.

function scope1(){ // child scope/local scope

    var a = 1; // a is declared and initialize locally
    console.log(`I Am Scope 1: ${a}`); // it will print local scope variable value.
    
}// child scope end

scope1();
console.log(`I Am Global Scope: ${a}`); // it will print global scope variable value.
                                        // Because global scope has no access to local scope.

//parent scope end

```

### Scope Example 2

```javascript

//parent scope/global scope

var a = 2;

function scope1(){ // child scope/local scope
    
    var b = 1; // b is declared and initialize locally.
    console.log(`I Am Scope 1: ${b}`); // it will print value of b
}// child scope end

scope1();
console.log(`I Am Global Scope: ${b}`); // ERROR: b is not defined in this scope.
                                        // Parent scope does not access to local scope

//parent scope end

```

### Scope Example 3

```javascript

//parent scope/global scope

var a = 2;

function scope1(){ // child scope/local scope

    // when console.log(...) will executed it will check it's local scope,
    // if declaration of a is not found then it will check it's parent scope and so on.

    console.log(`I Am Scope 1: ${a}`); // it will print global scope value of a.
                                       // Local socpe has the access of the variable of parent scope.
}// child scope end

scope1();
console.log(`I Am Global Scope: ${a}`); // it will print global scope value of a

//parent scope end

```

### Scope Example 4

```javascript

//parent scope/global scope

var a = 2;

function scope1(){ // child scope/local scope

    // when a = 3 will executed it will checks it local scope,
    // if declaration of `a` is not found then it will check it's parent scope.
    // And This `a` will point to the global `a`.
    // and if i change the value of `a` it will change the value of parent `a`.
    a = 3; 
    console.log(`I Am Scope 1: ${a}`); // it will print 3
}// child scope end

scope1();
console.log(`I Am Global Scope: ${a}`); // it will print 3

//parent scope end

```

### Scope Example 5

```javascript
//parent scope/global scope

function scope1(){ // child scope/local scope

    // There is no declaration of `a`. So, a = 3
    // will create a new variable for global scope.
    a = 3; 
    console.log(`I Am Scope 1: ${a}`); // it will print 3

    // when a = 5 will executed it will checks it local scope,
    // if declaration of `a` is not found then it will check it's parent scope.
    // And This `a` will point to the root `a`. Which is global scope variable 'a'.
    // and if i change the value of `a` it will change the value of parent `a`.
    a = 5;
}// child scope end

scope1();
console.log(`I Am Global Scope: ${a}`); // it will print 5

//parent scope end

// Note: if you use 'use strict' mode in your code, then it will throw a referance error.
// Because Strict mode disallows the automatic/implicit global variable creation.
```

# Nested Scope

Just as a block or function is nested inside another block or function, scopes are nested inside other scopes.
So, if a variable cannot be found in the current scope, it will check it's next outer scope, it will continue the checking until found or until the outermost global scope has been reached.

### Scope Example 1

```javascript

//parent scope/global scope

var a = 5;
function scope1(){ // child/local scope of scope1()

    var a = 10;
    function scope2(){ // child/local scope of scope2()
        var a = 12;
        console.log(a); // it will print 12
    }// scope2() child/local scope end

    scope2();
    console.log(a); // it will print 10
}// scope1() child/local end

scope1();
console.log(a); // it will print 5

//parent scope end

```

### Scope Example 2

```javascript
//parent scope/global scope


function scope1(){ // child/local scope of scope1()

    function scope2(){ // child/local scope of scope2()
        // This line will create a global scope variable
        // and it will point to that variable.
        a = 12;
        console.log(a); // it will print 12
    }// scope2() child/local scope end

    scope2();
    console.log(a); // it will print 12
}// scope1() child/local end

scope1();
console.log(a); // it will print 12

//parent scope end

```

### Scope Example 3

```javascript

//parent scope/global scope


function scope1(){ // child/local scope of scope1()
    
    var a = 10; // `a` is declared local scope of scope1()

    function scope2(){ // child/local scope of scope2()
        // This line will found the declaration of `a` in it's parent scope
        // and it will point to that variable.
        a = 12;
        console.log(`scope2(): ${a}`); // it will print 12
    }// scope2() child/local scope end

    scope2();
    console.log(`scope1(): ${a}`); // it will print 12
                    // Because in scope2() the value was changed.
}// scope1() child/local end

scope1();
console.log(`Global Scope: ${a}`); // ERROR: It will throw a Referance Error
                // Because `a` is not defined in global scope

//parent scope end

```