

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


// Terinary Operator
// TypeOf
// Increment & Decrement