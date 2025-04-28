

// What is a Class ?

// A class is a template (blueprint) for creating objects.
// Classes group data(properties) and functions(methods) together neatly.
// It's syntactical sugar over constructor functions and prototypes.


// Under the hood, classes still uses prototypes, but they look much cleaner and easier to manage!

// Basic Syntax :

// class Product{
//     // Props
//     constructor(name, price, quantity){
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     // methods
//     getInfo(){
//         return(`${this.name} costs $ ${this.price}`)
//     }
// }

// const pen = new Product("Ball pen", 10);
// console.log(pen.getInfo());



// Ecommerce shopping cart

// class CartItem{
//     constructor(productName, price, quantity){
//         this.productName = productName;
//         this.price = price;
//         this.quantity = quantity;
//     }


//     getTotalPrice(){
//         return this.price * this.quantity;
//     }

//     displayItem(){
//         console.log(`${this.productName} x ${this.quantity} = $ ${this.getTotalPrice()}`)
//     }
// }


// Creatinf cart Items

// const item1 = new CartItem("Wireless Mouse", 200, 2);
// const item2 = new CartItem("Bluetooth Speaker", 150, 1);

// item1.displayItem();
// item2.displayItem();



// Key Points about classes

// constructor()  Special method to initialize object properties
// Instance Methods - functions inside class used by object
// new keyword - used to create an instance from class


// Additional Feature : Class inheritance

// You can create child class using extends keyword from the parent class



class Product{
    // Props
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // methods
    getInfo(){
        return(`${this.name} costs $ ${this.price}`)
    }
}

class ElectronicProduct extends Product{
    constructor(name, price, warranty){
        super(name, price);   // call parent constructor
        this.warranty = warranty;

    }

    getWarrantyInfo(){
        return(`${this.name} has warranty of ${this.warranty} years`)
    }
}

const laptop = new ElectronicProduct("Dell Laptop", 55000, 2);


console.log(laptop.getInfo())
console.log(laptop.getWarrantyInfo());
