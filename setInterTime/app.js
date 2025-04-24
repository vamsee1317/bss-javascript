// setTimeOut : Executes a function once after a specified delay (milliseconds)

// Syntax :  setTimeout(callbackFunction, delayInMilliseconds)


// setTimeout((a,b)=>{
//     console.log(a+b);
// }, 2000, 20, 20);


// RealTime Example : E-commerce Notification

// Simulate "Item added to cart" - popup message that disappears after 3 seconds of time.

document.getElementById("addToCartBtn").addEventListener("click", ()=>{
    const messageBox = document.getElementById("msg");

    messageBox.innerText = "Item added to cart";
    messageBox.style.display = "block";

    setTimeout(()=>{
        messageBox.style.display = "none";
    }, 3000); 
} )



// setInterval() :
// Executes a function repeatedly at regular intervals of time

// Syntax : setInterval(callBackFunction, intervalInMilliSeconds);


// Real Time example : Sales countDown

let countDown = 5;

const timer = setInterval(()=>{
    console.log(`Flash Sale ends in ${countDown} seconds`);

    if(countDown === 0){
        clearInterval(timer);
        console.log(`Flash Sale ended!!!`)
    }

    countDown --;


}, 1000);