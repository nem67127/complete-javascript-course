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
// const description = "Portugal is in Europe, and its 11 million people speak portuguese";

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

//Strings and Template Literals
// template literals: `${enter JS}`, easier than concatination of strings/values, also allows multiple line strings 
//**-- ASSIGNMENT: Strings and Template Literals
//recreate description with template literal
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

//Taking decisions: if / else statements
// if / else statemnts are control structure, it controls blocks of code.
//**-- Assignment: if / else statements

if (population > 33000000){
    console.log(`${country}'s population is above the average`)
} else{
    console.log(`${country}'s population is ${33000000-population} below the average`)
}

// //--------- CODING CHALLENGE #2 --------
// // imporve challenge number 1
// const markWeight = 78; 
// const markHeight = 1.69; 
// const johnWeight = 92;
// const johnHeight = 1.95;

// //BMI = mass / height ** 2;
// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else{
// console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// //Type Conversion and Coercion 
// //Type conversion is when we manually convert from one type to another , string -> number -> boolean
// const inputYear = "1995";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear)+18);
// console.log(String(23));
// //NaN - not a number / invalid number
// console.log(Number("Tash"));
// console.log(typeof NaN);
// //Type Coercion is when JS automatically converts types behind the scenes for us
// console.log("I am " + 23 + " years old"); // changes the number to a string 
// console.log("23" - "10" - 3); // -, *, / converts strings to numbers whereas + converts numbers to strings;

// //**-- Assignment: Type Conversion and Coercion
// /* 
// Guess the outcome
// '9' - '5'; 4
// '19' - '13' + '17'; "617"
// '19' - '13' + 17; 23
// '123' < 57; NaN
// 5 + 6 + '4' + 9 - 4 - 2; 1143
// */
// console.log("9"-"5");
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57); // false - treats it like a number and will return boolean value
// console.log(5 + 6 + '4' + 9 - 4 - 2)

//Truthy and Falsy values
// 5 falsy values - 0, "", undefined, null, NaN become false when converted to a boolean 
// everything else will be truthy 
// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("hello")); //true
// console.log(Boolean({})); //true

// don't usually use Boolean() in practice

//Equality Operators: == vs ===
//strict exquality operator === no type coersion "18" === 18 false
//loose equality operator == , type coersion "18" == 18 is true
// strict !==, does not equal
// loose !=, does not equal

//**-- Assignment: Equality Operators
// const numNeighbours = Number(prompt('How many neighbour countries does your countryhave?'));

// if(numNeighbours === 1){
//     console.log('Only 1 border!');
// }else if( numNeighbours > 1){
//     console.log('More than 1 border');
// }else{
//     console.log('No borders');
// }

//Boolean Logic / Logical Operators
// combining true and false / combining logical operations
// AND: && when all variables are true
// OR: || when at least one varaiable is true
// NOT: ! inverts true/false

//--------- CODING CHALLENGE #3 --------

//calculate average scores for each team
//DATA 1
// const dolphinAverage = (96 + 108 + 89)/3;
// const koalaAverage = (88 + 91 + 110)/3;

//Bonus Data 1
// const dolphinAverage = (97 + 112 + 101)/3;
// const koalaAverage = (109 + 95 + 123)/3;

//Bonus Data 2
const dolphinAverage = (97 + 112 + 101)/3;
const koalaAverage = (109 + 95 + 106)/3;

// see who wins, there can be a tie
// Include a requirement for a minimum score of 100
const minimumscore = 100;

if (dolphinAverage === koalaAverage && (dolphinAverage >=minimumscore && koalaAverage >=minimumscore)){
    console.log(`There is a tie. Dolphins ${dolphinAverage} and Koalas ${koalaAverage}.`);
} else if(dolphinAverage > koalaAverage && dolphinAverage >= minimumscore){
    console.log(`Dolphins win with ${dolphinAverage} over Koalas ${koalaAverage}.`);
} else if (koalaAverage > dolphinAverage && koalaAverage >= minimumscore){
    console.log(`Koala's win with ${koalaAverage} over Dolphins ${dolphinAverage}.`)
} else{
    console.log(`Nobody got the minimum score of ${minimumscore}`)
}

