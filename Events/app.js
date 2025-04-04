// Events :

// What are Events ?

// Events are actions that occur in a program. They can be triggered by user interactions, system events or other programmatic actions.

// Events are user interactions with a webpage, such as clicks, key presses, mouse movements and form submissions.

// Javascript allows us to listen and respone to these events dynamically.


// Why are events important ?
// Make webpages interactive
// Allow users to interact with webpages
// Handles user actions (CLicks, inputs, mouse, keyboard)
// improve user experince
// Prevents unwanted behaviours (eg. form submissions without validation)


// Event Handling in Javascript

// There are 3 ways to handle events in js
// 1. Inline Event Handling (inside HTML)
// 2. Event Properties (assigning functions to event properties)
// 3. Event Listener (addEventListener method)



// Inline event handling (Not recommended)

    // <button onclick="alert('Button is clicked')">Login</button>
    // <button>Logout</button>

//  Why not recommended
//     1. Code duplication
//     2. Mixing js with html is not a good practice
//     3. Harder to manage large applications


// Event Props :

const addToCart = document.getElementById("addToCart");

addToCart.onclick = () => {
    console.log("Product added into cart");
}

// Why not Event props :
// More managable than inline hamdling
// Can only assign one event handler per event


// 3. Event Listener (addEventListener method)

const signUpBtn = document.getElementById("btn");

signUpBtn.addEventListener("click", ()=>{
    console.log("Sign up button is clicked");
} )


// Supports multiple event handlers
// Can be removed using removeEventListener method
// Can be used for all types of events (mouse, keyboard, form, etc.)
// More flexible and widely used


// Types of Events in Javascript

// Common events in javascript
// 1. Mouse Events - click, dblClick, mouseover, mouseout, mousemove
// 2. Keyboard Events - keydown, keyup, keypress
// 3. Form Events - submit, reset, change, focus, blur
// 4. Window Events - load, unload, resize, scroll, error


// Mouse event Example : Toggle Background Color
const colorBtn = document.getElementById("cBtn");

colorBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = document.body.style.backgroundColor === "yellow" ? "white" : "yellow";
})
// This will toggle the background color of the body on click of the button



// KeyBoard Event Example : Detect Key Press

const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

nameInput.addEventListener("keydown", ()=>{
    console.log(nameInput.value);
    output.innerText = nameInput.value;

})


// Form Event examples : Prevents Default form submission
const myForm = document.getElementById("myForm");

myForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // Stops form from refreshing or submitting
    console.log("Form submitted");
})