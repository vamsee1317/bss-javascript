import Cart from "./cart.js";
import { Product } from "./product.js";


const cart = new Cart();

const item1 = new Product("Shoes", 1500);
const item2 = new Product("Cap", 300);


cart.addProduct(item1);
cart.addProduct(item2);

console.log(cart);


console.log(`Total Amount : ${cart.getTotal()}`);