
// Sync vs Async

// Sync Programming :
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Async programming
console.log(1);
setTimeout(()=>{
    console.log(2);
},2000);
console.log(3);
console.log(4);
console.log(5);

// Why Promises ?

// Js is asynchronous by nature - which means some operations take time (like API calls, reading files..etc). If we don't handle them properly,our code becomes messy and hard to maintain.

// We initially used callbacks, but they led to callback hell.


// loginUser(user, ()=>{
//     console.log("User logged in");
//     getUserProfile(user, ()=>{
//         console.log("User profile fetched");
//         getUserOrders(user, ()=>{
//             console.log("User orders fetched");
//                 // Callback hell
//         })
//     })
// })

// Promises : [ES6]
// A Promise is an object representing the eventual completion or failure of an async operation.


// A promise is way to handle tasks that take time - like :
    // Fetching data from an API (eg, products, userDetails or images from a server).
    // Reading files from a database, processing images, or performing long-running computations
    // Waiting for user input or other asynchronous events

// Instead of writing messy code with lots of callbacks, Promises help write clean and readable code.


// Promise has three states: pending, fulfilled, and rejected.
// Think of ordering food online.

// You place the order -- > (Promise is created)
// The food is being prepared --> (Pending State)
// Order is delivered --> Resolved state
// order failes/ cancelled --> Rejected state



// Basic Syntax :

const myPromise = new Promise((resolved, rejected)=>{
    let success = false;

    if(success){
        resolved("Order placed successfully!");
    }else{
        rejected("Order failed!");
    }
});



myPromise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error(error);
})


// What is async / await ?
// async & await are cleaner ways to work with promises.

async function fetchData(){
    try{
        const result = await promise;
        console.log(result);
    }catch(error){
        console.error(error);
    }
}