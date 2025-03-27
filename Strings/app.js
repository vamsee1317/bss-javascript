// String : Collection of characters or words which are enclosed either in single quotes or else double quotes

// Everyting in js will be treated objects.

// Every object will have props & methods


// 1. length -> validate the userName length in a login form.

function validate(){
    const userName = document.getElementById("userInput").value;

    userName.toUpperCase();

    console.log(userName.length);

    if(userName.length < 5){
        alert("Please enter a valid username");
    }else{
        alert("Username is valid");
    }
}

// 2. toUpperCase() :

let userName = "vamseekrishna";
console.log(userName.toUpperCase());

// 3. toLowerCase() :

let userEmail = "VamseeKrishna@Gmail.com";
console.log(userEmail.toLowerCase());

// 4. trim() : removes the spaces from the string

let searchInput = "     lenovo laptop";
console.log(searchInput);
console.log(searchInput.trim());

// 5. indexOf() - helps you to find a specific index of a character.

let email = "abc@gmail.com";
console.log(email.indexOf("@"));

// 6. includes() - checks if the character is avaiable in the exisiting string.

let password = "123456";
console.log(password.includes("@"));

// 7. slice() - extracts a specific portion from a string.
let name = "vamsee krishna";
console.log(name.slice(-7));

// 8. substring() - get a part of string
let uname = "vamsee krishna";
console.log(uname.substring(-5, 5));

// Slice vs substring:
// slice() is more flexible than substring() because it can accept negative numbers and it can accept a second argument that is greater than the first argument.

// substring() does not support negative numbers and it does not support a second argument that is greater than the first argument.


// 9. replace - replaces a specific string with new string

let cardNumber = "1234-2345-6789-0987";
console.log(cardNumber.replace("2345-6789", "****-****"));

// 10. split() - splits a string into an array of strings
let address = "123, itpl main road, hyderabad";
console.log(address.split(","));

// 11. charAt() & charCodeAt() 


let user = "DavidWarner";
console.log(user.charAt(0));
console.log(user.charCodeAt(0));

// 12. concat()

let firstName = "Vamsee";
let lastName = "Krishna";
console.log(firstName.concat(lastName));
