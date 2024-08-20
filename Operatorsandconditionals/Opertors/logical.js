// Logical operators are used to connect two or more expressions/conditions to make decisions based on the criteria employed.

// There are typically three types of logical operators :

// (a) AND (&&)

// (b) OR (||)

// (c) NOT (!)

//AND (&&)
/*
It is used to evaluate whether both of the given expressions or operands are true.
*/ 
let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2);    // false
console.log(alert2 && alert3);    // false
console.log(alert1 && alert3);    // true


let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0


/*OR (||)
The logical OR operator is denoted by '||'. It is used to evaluate whether any one of the given expressions or operands is true. It returns false only if both expressions or operands are false. If any one of the expressions or operands is true or evaluates to 1, the logical OR operator returns true.
*/

let a = false;
let l = false;
let e = true;

console.log(a || l);    // false
console.log(l || e);    // true
console.log(e || a);    // true

let k = 0;
let j = 1;
let m = 0;

console.log(k || j);    // 1
console.log(j || m);    // 1
console.log(k || m);    // 0

/*
NOT (!)
The logical NOT operator is denoted by '!'. It is used to make truthy values falsy and vice-versa. It returns false if input is a true.
*/

let ui1 = false;
let ui2;
let ui3 = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;

console.log(!ui1);      // true
console.log(!ui2);      // true
console.log(!ui3);      // true
console.log(!mySum);       // false
console.log(!gone);        // true
console.log(!isFirst);     // false