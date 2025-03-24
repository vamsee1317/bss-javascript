
// 1. User Authentication System (Login & Logout);

// Scenario : When a user logs in, we store their details and when they logout we clear the session from localStorage.


function loginUser(userName, password){
    console.log(`Welcome , ${userName}`);
    // localStorage.setItem('user', userName);
}

function logoutUser(){
    console.log('Goodbye!');
    // localStorage.removeItem('user');
}


loginUser("Vamsee", "Vamsee@123");
logoutUser();  // Goodbye!



// 2. Online Shopping Cart (Add/remove Items)
// Scenario : When a user adds an item to the cart, we store the item in the cart
// When a user removes an item from the cart, we remove the item from the cart.
// WE update the total price dynamically.


// let cart = [];

// function addToCart(item, price){
//     cart.push({item, price});
//     console.log(`Added ${item} to cart`);
// }

// function removeFromCart(item){
//     cart = cart.filter((product)=>{product.item !== item});
//     console.log(`Removed ${item} from cart`);
// }

// function getTotal(){
//     let total = cart.reduce((sum, product)=>{sum + product.price}, 0);
//     console.log(`Total Price: $${total}`);
//     return total;
// }

// addToCart

// addToCart("Laptop", 50000);
// addToCart("Mobile", 20000);
// addToCart("Watch", 10000);

// console.log(cart);

// // console.log(getTotal())

// // remove cart
// removeFromCart("Mobile");
// console.log(cart);

// 3. OTP Generation for user verfication

function generateOTP(){
    console.log(Math.ceil(Math.random()*1000000));
}

generateOTP();


// 4.  API calls to fetch product data.

// Scenario : We have a product API that returns a list of products.

// API endpoint : https://dummyjson.com/products

async function fetchProducts(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchProducts();


// ES6 feature:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
