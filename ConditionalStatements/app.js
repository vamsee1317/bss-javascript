// Conditional Statements : 

// CS in js allow us to execute different blocks of code based on different condtions.
// This helps us in decision-making within the program.
// CS will work on boolean values (Boolean values will come from set of conditions)


// if - executes a block of code if the condition is true.
// if else - executes one block if true, another block if false
// if else if - checks multiple conditions one by one.
// switch - A more structured way to handle multiple conditions.


// if statement - only true outcome

let stock = 0;

if(stock > 0){
    console.log("Stock is available");
}

// if else - Allows two possible outcomes

let userLoggedIn = false;

if(userLoggedIn){
    console.log("Welcome User");
}else{
    console.log("Please login to access the content");
}


// Else if ladder :
// This is used when we have multiple conditions to check and we want to check them one by one.

let cartValue = 50000;
let paymentWay = "debitCard";

if(cartValue >= 10000 && paymentWay == "creditCard"){
    console.log("You get 20% discount!!");
    let totalCart = cartValue - (cartValue * 0.2);
    console.log("Your final cart value is : ", totalCart);
}else if(cartValue >= 5000){
    console.log("You get 10% discount!!");
    let totalCart = cartValue - (cartValue * 0.1);
    console.log("Your final cart value is : ", totalCart);
}else{
    console.log("No discount available!!");
    let totalCart = cartValue;
    console.log("Your final cart value is : ", totalCart);

}


// Switch case :

let paymentMethod = "debitCard";


switch(paymentMethod){
    case "creditCard":
        console.log("Payment method is credit card");
        break;
    case "paypal":
        console.log("Payment method is paypal");
        break;
    case "bankTransfer":
        console.log("Payment method is bank transfer");
        break;
    case "cod":
        console.log("Payment method is cash on delivery");
        break;
    default:
        console.log("Invalid payment method");
        break;
}


// Ternary Operator :
// This is used to make a simple conditional statement in a single line.
// It is used when we have only two conditions to check.
// Alternate way of writing if & else.

// if(isPrimeUser){
//     console.log("You get free shipping!");
// }else{
//     console.log("You have to pay for shipping!");
// }

// () ? true : false;

let isPrimeUser = false;

(isPrimeUser) ? console.log("You get free shipping!") : console.log("You have to pay for shipping!");

