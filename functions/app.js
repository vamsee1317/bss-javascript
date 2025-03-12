// Javascript Functions :

// What is a function ?

// A function in js is a block of reusable code desgined to perform a specific task.

// Instead of repeating the same code multiple times, we can write a function once and call it n number of times whenever we needed.



// Why ?
// 1. Code Reusability - write once, use it multiple times
// 2. Code Readability - Break down complex logics into smaller parts
// 3. Code Maintainability - Easy to modify and update & also debug.
// 4. Code Scalability - Easy to add new features and functionalities.


// Types of Functions :

// Function Declaration:
// Function Expression :
// Anonymous Function :
// Arrow Function :  
// Self Invoking Function or IIFE
// callback functions :


// Function Declaration :

// function functionName(){
//     // code to be executed
// }

// Define function
// function greetUser(){
//     console.log("Hello User");
// }

// // calling a function
// greetUser();
// greetUser();


// Function with parameters

// const name = "Vamsee";

// function greetUser(name, age){
//     console.log(`Hello ${name} and his age is ${age}`);
// }

// greetUser("VamseeKrishna", 24);
// greetUser("Sandeep", 32);


// Function Expression : a function assigned to a variable.

// let userName = "VamseeKrishna";
// userName = "Vamsee";

// const greet = function(userName){
//     console.log("1");
//     console.log("1");
//     console.log("1");
//     return(`Hello!! ${userName}`);


// }

// const result = greet("Sandeep");
// console.log(result);


// Arrow Functions : 
// AF is a ES6 way of writing functions
// AF is a shorthand for function expression


// const sum = (num1, num2,num3) => {
//        return(num1 + num2 + num3);
// }

// const result = sum(20, 30, 40);
// console.log(result);

// Self Invoking Function or IIFE

// (function(){})();
// (()=>{})();
// ((a,b)=>{})(10, 20);

// (function(num1, num2){
//     console.log(num1 + num2);
// })(200, 300);