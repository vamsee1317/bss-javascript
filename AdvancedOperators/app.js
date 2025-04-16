// Spread Operator :
// It expands arrays or objects into individual elements or properties.

// Basic Example : Arrays

const electronics = ['TV', 'Mobile', "Laptop"]
const furniture = ['chair', 'table', 'sofa']

const allProducts = [...electronics, ...furniture, ...electronics];
console.log(allProducts);

// Objects :
const person = { name: 'John', age: 25 }
const address = { city: 'New York', country: 'USA' }

const userDetails = {
    ...person,
    ...address,
    occupation: 'Software Engineer',
    hobbies: ['Coding', 'Reading', 'Traveling'],
    name : "John Doe"
}
console.log(userDetails);

// Rest Operator :
// It collects all the arguments into an array.

function add(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

add(10, 20, 30, 40, 50);


// Scenario : customer adds multiple items to their cart:

function addToCart(customerName, ...items){
    console.log(`${customerName} added ${items.length} items to the cart :`);

    items.forEach((item, index)=>{
        console.log(`${index+1}. ${item}`);
    })
}


addToCart("Vamsee", "Mobile", "Watch", "T-Shirt", "Shoes");

// Destructuring :
// It allows us to extract values from arrays or objects and assign them to variables.


// Array Des :

const products = ['Laptop', 'Phone', 'Tablet', "Headphoes", "earpHones"];

console.log(products[0]);

const [p1, p2, p3, ...p4] = products;
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);


// Object Des :

const product = {
    name : "shoes",
    price : 999,
    brand : "Nike"
}

console.log(product.name);


const {name, price, brand} = product;
console.log(name);
console.log(price);

// Array Destructuring : Top 3 reviews, categories
// Object Des : Order summary