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
let population = 38250000;

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

// // Basic Operators
// // transform values or combine values
// // concatination + strings together
// // mathematic operators: +, -, /, *, **
// // assignment operators: 
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 : 25
// x *= 4; // x = x * 4 : 100
// x ++; // x = x + 1: 101
// x --; // x = x - 1: 100

// //comparison operators:
// // used to create boolean values > , < , <= , >=
// x > 100; // false
// console.log(x > 100);

//**-- ASSIGNMENT: Basic Operators
// half of the population of your country
const halfPopulation = population / 2;
console.log(halfPopulation);

//population plus 1
population ++;
console.log(population);

//Is your country's population bigger than Findland's
const populationFinland = 6000000;
const isBiggerThanFinland = population > populationFinland;
console.log(isBiggerThanFinland);

//create a description variable with the string provided
const description = "Portugal is in Europe, and its 11 million people speak portuguese";

// //Operator Precedence
// //different operators are executed before other, most math operators are executed before comparison operators 
// //assignment is one of the last to be executed and done right - left 
// // () are executed first like PEDMAS
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y); // 10, 10

// //--------- CODING CHALLENGE #1 --------
// //Calculate BMI with two different data sets, weight in kg, height in m

// //DATA set 1
// let markWeight = 78; 
// let markHeight = 1.69; 
// let johnWeight = 92;
// let johnHeight = 1.95;

// //BMI = mass / height ** 2;
// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// //DATA set 2
// markWeight = 95;
// markHeight =  1.88;
// johnWeight =  85;
// johnHeight = 1.76;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);