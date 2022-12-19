/*let js = "amazing";

console.log(40 + 8 +23 - 10);
// variable is box where we can store values, then later in the code we can reference the variable over and over again
// variable names in camelCase and not start with a number ie. 3
let firstName = "Jonas";
console.log(firstName);

//variables should be very descriptive
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
//NOT this:
let job1 = "Programmer";
let job2= "Teacher";
*/

//**--- ASSIGNMENT: Values and Variables

const country = "Canada";
const continent = "North America";
let population = "38.25 million";

console.log( `country: ${country}, continent: ${continent}, population: ${population}` );


// //DATA TYPES
// // objects or primitives, everything thats not an object is a primative (7 types: number, string, boolean, undefined, null, symbol, BigInt)
// // the value has a type not the variable, JS has dynamic typing which menas you dont have to declare it's type it will already know
// let js = true;
// console.log(js);
// console.log(typeof js);

// js = "YES!";
// console.log(typeof js);

// //typeof null is an object which is a bug/ error but kept for legacy reasons
// console.log(typeof null)

//**--- ASSIGNMENT: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

// let, const, var
// let: to declare variables that can change later, block scrope
// const: to decelare variables that do not change later - a constant, cannot be empty
// var: lagacy way (old) of declaring variables work similarly to let, function scope

//**--- ASSIGMENT: let, const, var
language = "English";

// Basic Operators
// transform values or combine values
// concatination + strings together
// mathematic operators: +, -, /, *, **
// assignment operators: 
let x = 10 + 5; // 15
x += 10; // x = x + 10 : 25
x *= 4; // x = x * 4 : 100
x ++; // x = x + 1: 101
x --; // x = x - 1: 100

//comparison operators:
// used to create boolean values > , < , <= , >=
x > 100; // false
console.log(x > 100);


