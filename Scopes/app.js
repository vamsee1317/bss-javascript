// Scopes in Javascript :


// What is Scope ?
// Scope defines where variables and functions are accessible within your code.

// Types of scope :

// Global scope : Accessible anywhere in the file
// Local scope : Accessible only within the block of code where it is declared
// Block scope : Accessible only within the block of code where it is declared


// Global Scope :


let siteName = "Amazon";

console.log(`GlobalSpace : ${siteName}`);

function showSite(){
    console.log(`functionSpace : ${siteName}`);
}

if(true){
    console.log(`Block Space : ${siteName}`);
}

showSite();


// Function Scope :

function cartTotal(){
    var total = 500;
    console.log(`Function Scope : ${total}`);

    function discount(){
        var discountAmount = 100;
        var totalAmout = total - discountAmount
        console.log(`Function Scope : ${discountAmount}`);
    }
    console.log(totalAmout);

    discount();
}

cartTotal();

console.log(`Global Space : ${total}`);

{
    console.log(`Block Scope : ${total}`);
}



// Block Scope :

if(true){
    var discount = 20;
    var coupon = "WELCOME20";
    console.log(`Block Scope : ${discount}`);
    console.log(`Block Scope : ${coupon}`);
}


console.log(`Global Scope : ${discount}`);
console.log(`Glbal Scope : ${coupon}`);



{
    var x = 10;
    console.log(x);
}

console.log(x);



// Project Based Example : Ecommerce Discount Scope :

let product = "Shoes";
let price = 1000;

function applyDiscount(){
    let discount = 100;
    let finalPrice = price - discount;
    console.log(`Final Price : ${finalPrice}`);
}


console.log(price);