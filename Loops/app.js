// Loops : 

// Loops in js are used to execute a block of code multiple times until a specific condition is met.

// For Example : in an ecommerce application, loops will help us in.
// 1. Displaying all the products on the website dynamically.
// 2. Iterating over items in a cart to calculate the total price.
// 3. Repeating an action (eg. sending emails to mutiple users).

// How to iterate a loop for static action
// How to iterate a loop for dynamic action

// Types of Loops :

// Basic :
    // for loop - executes a block of code for specific number of times. (Predictable iterations)

    // while loop - repeats a block of code while a condition is true. (Unpredictable iterations)

    // do while loop - Executes the code at least once, then repeats while condition is true.

// Advanced Loops :
    // for of loop - iterates over iterable arrays
    // for in loop - iterates over objects



// For Loop : (Fixed Repetitions)
// used when we know how many times to execute a block code.

// Syntax : 

    // for(initializer; condition ; incre/decre){
    //     // code to be executed
    // }

    for(let i = 0; i < 10 ; i++){
        console.log(`Processing Order #AMID${i}`);
    }


// While Loop : (Condition-based repetition)
// used when we don't know how many times to execute a block of code.
// it will keep executing until the condition is met.

let stock = 5;

while(stock > 0){
    console.log(`Selling procduct - Stock remaining : ${stock}`);
    stock--;
}


// Do While Loop : (Executes at least once)
// used when we want to execute a block of code at least once, then repeat it while a
// condition is true.

let cartItems = 0;

do{
    console.log("Adding item to cart...");
    cartItems ++;
}while(cartItems > 5);


// Advanced Loops :

let products = ["Laptops", "Mobiles", "HeadPhones", "EarPhones", "Desktops", "Mouse"];

// for(let i=0; i < products.length; i++){
//     console.log(products[i]);
// }

// for of Loop : used for iterating over arrays.

for(let item of products){
    console.log(item);
}

// for in loop : (Used for objects)

let product = {
    "name" : "Laptop",
    "price" : 50000,
    "brand" : "Dell",
    "color" : "Black"
}

for(let key in product){
    console.log(product[key])
}


// Loops - Ecommerce Application

// Scenario :
// You're building an ecommerce application where :
// for loop displayes procuts dynamically
// while loop calculates the total cart price.
// for of loop iterates over ordered items.
// for in loop extracts product details.

// Step 1 : display list of products using a for loop.
let productList = ["Laptop", "Tv", "Tablet", "Headphones", "EarBuds"];

console.log(`Available Products`);

for(let i= 0 ; i < productList.length; i++){
    console.log((i+1) + "." + productList[i]);
}

// step 2 : calculate cart total using a while loop.

let cartPrices = [50000, 20000, 10000];
let total = 0;

let i = 0;

while(i < cartPrices.length){
    total += cartPrices[i];
    i++;
    // total = total + cartPrices[i];
}

console.log("total cart value : $" + total);


// Step 3 : display ordered items using for of:

let ordereditems = ["Laptop", "Mobile"];

console.log("Your Orders :");
for(let item of ordereditems){
    console.log("- " + item);
}

// Step 4 : Extract Product Details using for in:

let selectedProduct = {
    "name" : "Laptop",
    "price" : 50000,
    "brand" : "Dell",
    "color" : "Silver"
};

console.log("Product Details");
for(let key in selectedProduct){
    console.log(key + ": "+ selectedProduct[key]);
}