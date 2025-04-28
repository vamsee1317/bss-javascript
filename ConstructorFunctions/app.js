
// What is a Constructor Functions in Js ?

// A CF is used to create multiple objects with the same structure.

    // It acts like a blue print - just like we use a template to create multiple products, profiles..etc


// Syntax :

// function Product(title, price, brand){
//     this.title = title;
//     this.price = price;
//     this.brand = brand;

//     this.getDetails = function(){
//         return(`${this.title} by ${this.brand} costs $ ${this.price}`)
//     }

// }

// const p1 = new Product("SamrtPhone", 25000, "Samsung");
// const p2 = new Product("Laptop", 45000, "HP");

// console.log(p1.getDetails());
// console.log(p2.getDetails());

// Note :
// new keyword creates a new object or instance
// this refers to the object being created



// Why Constructor functions ?

// Helps us to build multiple structured data objects easily
// Used as a base for Prototypes and Classes.



// Prototypes in Javascript :

// What is a Prototype ?

// In js, every object has a hidden property called [[Prototype]], which refers to another object.

// This forms a prototype chain, and it is used for inheritance - meaning one object can access properties or methods defined in another objects.


// Why prototype ?

// Efficient memory usage : Shared methods are not re-created for every object.
// Enables inheritance between objects.
// Forms the base of how class and extends work under the hood.


// Regular Method (Not Efficient)

// function Users(name, age){
//     this.name = name;
//     this.age = age;

//     // This method is recreated for every object
//     this.getInfo = function(){
//         return(`${this.name} and his age is ${this.age}`)
//     }
// }


// const user1 = new Users("Vamsee", 25);
// console.log(user1)


// Better way using Prototypes :


function Users(name, age){
    this.name = name;
    this.age = age;

}

// Shared ,ethod using prototype:

Users.prototype.getInfo = function(){
    return `${this.name} and ${this.age}`
}

const user1 = new Users("sandeep", 27);
const user2 = new Users("Shiva", 28);


console.log(user1.getInfo());
console.log(user2);



// Real Time Project Example : Product Rating Feature(E-commerce)


function Product(name, price){
    this.name = name;
    this.price = price;
    this.ratings = [];
}

Product.prototype.addRating = function(stars){
    this.ratings.push(stars);
}

Product.prototype.getAverageRating = function(){
    const total = this.ratings.reduce((sum, rating) => sum + rating, 0);
    return(total / this.ratings.length).toFixed(1);
}

const keyBoard = new Product("MechanicalKeyBoard", 1999);
keyBoard.addRating(5);
keyBoard.addRating(4);
keyBoard.addRating(5);



console.log(`${keyBoard.name} Avg Rating : ${keyBoard.getAverageRating()}*`);



// Key Takeaways :

// Feature              Constructor                        Prototype
// Purpose              Create Objects                     Share Methods
// Memory               New Copy per object                Shared
// Syntax               this.method = ....                 Function.prototype.method =...
