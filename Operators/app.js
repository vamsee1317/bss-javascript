

// Operators :

// In js, operators are special symbols used to perform operations on variables and the data which is inside variables.
// They help us manipulate data, compare values and execute logics as well.


// 1. Arithematic : To perform basic mathematical Operations.
    //  (+, -, *, /, %, **)


// let num1 = "1000";
// let num2 = 200;
// let num3 = 300;

// BODMAS
// 1. Brackets
// 2. Orders ( Powers)
// 3. Division
// 4. Multiplication
// 5. Addition


// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);  
// console.log(num1 / num2);   
// console.log(num1 % num2);  
// console.log(num1 ** num2);


// console.log(`
//         num1 + num2 : ${num1 + num2}
//         num1 - num2 : ${num1 - num2}
//         num1 * num2 : ${num1 * num2}
//         num1 / num2 : ${num1 / num2}
//         num1 % num2 : ${num1 % num2}
//         num1 ** num2 : ${num1 ** num2}
//     `)


// Assigment Operators :
//   (=, +=, -=, *=, /=)

let num = 100;
console.log(num);
num += 200;
console.log(num);
num -= 200;
console.log(num);
num *= 200;
console.log(num);
num /= 200;
console.log(num);
num %= 200;
console.log(num);

// Comparision Operators :
// (==, ===, >, <, >=, <=, !=)
let num1 = 200;
let num2 = '200';

console.log(
    `
        num1 == num2 : ${num1 == num2}  
        num1 === num2 : ${num1 === num2} 
        num1 > num2 : ${num1 > num2}
        num1 < num2 : ${num1 < num2}
        num1 >= num2 : ${num1 >= num2}
        num1 <= num2 : ${num1 <= num2}
        num1 != num2 : ${num1 != num2}
    `
);



// Logical Operators :
// (&&, ||, !) - (&& - multiplication, || - add, ! - opposite);


// And Truth Table :

//   A | B | A && B
//   0 | 0 | 0
//   0 | 1 | 0
//   1 | 0 | 0
//   1 | 1 | 1

// When all the inputs are true the output will aslo be true.

// Or Truth Table :
//   A | B | A || B
//   0 | 0 | 0
//   0 | 1 | 1
//   1 | 0 | 1
//   1 | 1 | 1

// When any one of the inputs are true the output will also be true.


let num4 = 500;
let num5 = 200;
let num6 = 100;

console.log((num4 > num5) && (num4 > num6) && true && (true && false) &&  true);


// console.log((num4 > num5) || (num4 > num6));
// console.log(!(num4 > num5)); // ! - opposite

// TypeOf :
// typeof - returns the type of the variable.


const userName = "VamseeKrishna";
const userAge = 25;
const userIsAdmin = true;
const userAddress = {
    street: "Street1",
    city: "City1",
    state: "State1",
    country: "Country1"
    };

console.log(`
    TypeOf Username ${typeof userName}
    TypeOf UserAge ${typeof userAge}
    TypeOf UserIsAdmin ${typeof userIsAdmin}
    TypeOf UserAddress ${typeof userAddress}
    `)

// Increment & Decrement :
// Increment :
    // pre incre : ++x
    // post incre : x++
// Decrement :
    // pre decre : --x
    // post decre : x --

let age = 25;
let updatedAge = age --;
console.log(age);
console.log(updatedAge);


// Employee Management System :

const employeeName = "VamseeKrishna";
let basicSalary = 600000;
let bonus = 100000;
let taxRate  = 10;


// Salary Calucalation :

let grossSalary = basicSalary + bonus;
let tax = (taxRate / 100) * grossSalary;
let netSalary = grossSalary - tax;
console.log(
    `
    Employee Name : ${employeeName} here is paySlip
    Gross Salary : ${grossSalary}
    Tax : ${tax}
    Net Salary : ${netSalary}
    `
);


// Bonus Eligibility :

let employeeExperience = 3;
let perfomanceRating = 4;

let isBonusEligible = employeeExperience >= 2 && perfomanceRating >= 3;
console.log(
    `
    Employee Name : ${employeeName}
    Experience : ${employeeExperience} years
    Performance Rating : ${perfomanceRating}
    Bonus Eligible : ${isBonusEligible}
    `
)