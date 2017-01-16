# Function Scope

### Function Scope Example 1

```javascript

//Global Scope Start

function func1(a){ // func1() Scope Start
    
    var b = 2;
    function func2(){ // func2() Scope Start
        var c = 3;
        console.log(`${a} ${b} ${c}`); // 1 2 3
    } // func2() Scope End

    func2();
} // func1() Scope End

func1(1);

//func2();  // it will throw a Reference Error

// func2() is only accessable to func1() scope,
// outside of function1() it is not accessable.

//Global Scope End

```

# Blocks Scope

### Blocks Scope Example 1

```javascript

//Global Scope Start

function func1(a){ // func1() Scope Start

    if(a == 1){ // fake block
        var b = 3; // `b` is declare and initialize inside the block
        console.log(b);
    }

    console.log(b); // `b` is accessable outside the block
} // func1() Scope End

func1(1);

// console.log(b); // `b` is not accessable outside the function scope
//Global Scope End

```

### Blocks Scope Example 2

```javascript

//Global Scope Start

function func1(a){ // func1() Scope Start

    if(a == 1){ // fake block
        // `let` keyword helps you to create a block
        let b = 3; // `b` is declare and initialize inside the block
        console.log(b); // 3
    }

    //console.log(b); // now 'b' is not accessable outside of yhe block
} // func1() Scope End

func1(1);

// console.log(b); // `b` is not accessable outside the function scope
//Global Scope End

```