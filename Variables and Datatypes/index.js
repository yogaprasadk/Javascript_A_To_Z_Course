/*
There are total of 63 keywords which JavaSscript provides to the programmers.

Types of naming conventions
There are numerous variable naming conventions in the coding world, but among the most important are :

a) Camel Case
Example: let firstStudent
b) Pascal Case
Example: let FirstStudent
c) Snake Case
Example: let first_student
d) Kebab Case
Example: let first-student
*/


// var 
var a = 5
console.log(a)
/*

variables can be reassigned in var
 example:-

 var b = 65
 b = "yogaprasad"
 console.log(b) // yogaprasad

*/
// let 

/* let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined. Block scope refers to any code block delimited by curly braces {} such as loops, conditionals, or function bodies. */

//example:-
let a = 5
if(true){
          let b = 4
          console.log(a) // 5
          console.log(b) // 4
}
console.log(a)//5
console.log(b)// no output (throws ReferenceError: b is not defined)

/* reassign and redefine in let */

// example:-
let g = 4
g = "string"
console.log(g) //string

// const 
const f = 4
console.log(f)

// const can't able to reassign 
//example:-

/*const g = 5 
g = 5 
console.log(g) output: error
*/

/*
var h;
let j; // let and var can be or cant' be initialized
const h; // must be initialized otherwise it show error
*/

//const using objects 
/* in objects it is used to modify */

//example:-
const obj = {
          name:"Yoga",
          age: 21
};
console.log(obj.name) // Yoga

//modification
obj.name = "yogaprasad"
console.log(obj.name)//yogaprasad

// using object try to reassign it will throw an error
obj = {}


//datatypes
/*
Two types of datatypes 
1.Primitive datatypes
2.Non Primitive datatypes

1.Primitive Datatypes
Number 
String 
Null
undefined
boolean
symbol
BigInt
*/
//example:- for Number
let marks = 45
console.log(marks)

// example:- for String
let name1 = "yogaprasad"
console.log(name1)

// example:- for null
let name2 = null
console.log(name2)

// example:- for boolean
let booleant = true;
let booleanf = false;

// example:- for undefined
let make;
console.log(make)
// example:- for BigInt
let bigint = 123243546578697089786754653423425378697865534321234354657643224567
console.log(bigint);
// bigint range(-2^53 - 1) to (2^53 - 1) ^-power