

// Hoisting in Javascript :

// What is Hoisting :

// Hoisting in js, is a default behaviour of moving declarations(variable & function) to the top of their scope before execution.


// Var declarations are scanned first and made undefined
// Function declarations are scanned first and made available
// let & const & function expressions can't be hoisited

console.log(userName);

var userName = "Vamsee";

greet();

function greet(){
    console.log("Hello " + userName);
}

