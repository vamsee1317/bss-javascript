

// Closure : 
// Closure is a function that has access to its own scope, the parent scope,
// and the global scope.

// A Closure happens when a function is able to access variables from its parent scope, even after the parent function has finished executing.


// Basic Closure Code Example :

function outerFunction(){

    let secret = "JS is Awesome";

    function innerFunction(){
        console.log(secret);
    }

    return innerFunction;
}

const callClosure = outerFunction();
callClosure(); // Outputs: JS is Awesome


// Even though outerfunction() has finished running, the innerFunction() remembers and accesses secret --- "That's closure"


// RealTime example :

// Imagine a real project where a customer clicks "addToCart" -- and the count increases, but count should not be globally accessible (private variables).



function cartSystem(){
    let itemCount = 0;

    return function(){
        itemCount ++;
        document.getElementById('cartStatus').innerText = `Items in Cart : ${itemCount}`;
    }
}

console.log(itemCount);


const addToCart = cartSystem();
document.getElementById("btn").addEventListener('click', addToCart);


// What's really happening :

// - itemCount is inside cartSystem() --> it's not accessible from outside.
// - cartSystem() returns a function (which is a closure) that has access to itemCount.
// - When we call addToCart(), it's actually calling the returned function from cartSystem(), which has access to itemCount and increments it.


// addToCart() remembers itemCount and modifies it each time - (thanks to closure)


// Why closures :

// useCase                                 How Closures Help
// 1. Private Variables                  - Encapsulation
// 2. Secure Data                        - Keeps variables private (like itemCount)
// 3. Reusable Logic                     - Factory-likefunctions(Returning other functions)