// Array is a collection information or data, which can be of same datatype or different data type stored in a single variable.
// Everything in js will be treated as Object.
// Object is a collection of properties or key-value pairs.


// Props :

// 1. length --> checks the length of a array.
 
let cart = [];
console.log(cart.length > 0 ? "Cart is not empty" : "Cart is empty");

// Methods :

// 1. push() --> adds an element at the end of the array.

cart.push("iphone 13", "Macbook Air");

// 2. pop() --> removes an element from the end of the array.

const removedItem = cart.pop();
console.log(removedItem);

// 3. shift() --> removes an element from the beginning of the array.

const beginingItem = cart.shift();
console.log(beginingItem);

// 4. unshift() --> adds an element at the beginning of the array.
cart.unshift("Iphone 12");
cart.unshift("Macbook Pro 2");
cart.unshift("Iphone 12");

// 5. indexof() --> finds the position of a element
console.log(cart.indexOf("Iphone 12"));

// 6. lastIndexOf() --> finds the position of an element from last point
console.log(cart.lastIndexOf("Iphone 12"));
// 7. includes() --> checks if an element is present in the array or not
console.log(cart.includes("Iphone 12"));
// 8. join() --> converts the array into a string
console.log(cart.join(" , "));
// 9. concat() --> merges two arrays
const newCart = cart.concat(["Iphone 13", "Macbook Air"]);
console.log(newCart);
// 10. sort() --> sorts the array in ascending order
cart.sort();
const prices = [999, 2999, 499, 199, 399];
prices.sort((a, b) => b - a);
// 11. reverse() --> reverses the array
prices.reverse();
console.log(prices);
// 12. findIndex() --> finds the index of the first element that satisfies the condition

const numbers = [10, 13, 5, 26, 99, 74, 55];
const index = numbers.findIndex((num) => num > 50);
console.log(index);

// 13. slice() : helps us to extract portion of an array.

let selecteditems = cart.slice(0);
console.log(selecteditems);

// 14. splice() : helps us to add or remove items from an array at the same time.

cart.splice(3, 0, "Iphone 15", "Airpods 2nd Gen");
console.log(cart);

// 15. map() :

const productPrices = [199, 299, 599, 699, 399, 999];
const discountedPrice = productPrices.map(dp => dp * 0.1);
console.log(discountedPrice);
// 16. filter() : helps us to filter the array based on the condition.

let expensiveProducts = productPrices.filter(price => price > 300);
console.log(expensiveProducts);
// 17. reduce() : helps us to reduce the array into a single value.

const cartProductPrices = [100, 2000, 300, 100];
const total = cartProductPrices.reduce((a,b)=> a+b, 0);
console.log(total);
