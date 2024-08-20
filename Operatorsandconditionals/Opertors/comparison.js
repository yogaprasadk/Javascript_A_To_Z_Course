/*
Comparison operators, such as greater then (>), less than (<), greater than or equal (>=), less than or equal (<=), equal to (==), not equal to (!=) are used to compare values and determine the relationship between them. These return a boolean value in the output.
 */

let value1 = 45
let value2 = 46
console.log(value1 > value2) // false
console.log(value1 < value2) // true
console.log(value1 == value2) //false
console.log(value1 >= value2) // false
console.log(value1 <= value2) //true
console.log(value1 != value2) // true

/*difference between strictequality and looseequality 
Strict Equality -> ===
Loose Equality -> ==
*/

// Strict Equality
/*
When we use strict equality operator, both the data-type and the value are checked to determine equality.It will give result as  boolean value*/

const va1 = "10"
const va2 = "10"
console.log(va1 === va2) // true

console.log(typeof(va1)) // String

// Loose Equality
/*When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.*/

let x = "10"
let y = 10
console.log(x == y)



