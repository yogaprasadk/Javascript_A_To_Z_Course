/*Bitwise Operators
Bitwise operators are used to do manipulation of individual bits within the binary representation of numbers. There are several bitwise operators are used in JavaScript :

(a) Bitwise AND (&)

(b) Bitwise OR (|)

(c) Bitwise NOT (~)

(d) Bitwise XOR (^)

(e) Left Shift (<<)

(f) Right Shift (>>)

Bitwise AND (&)
Bitwise AND is denoted by '&'. It is used between two numbers, and the bitwise AND operation is performed on each corresponding bit of the two numbers.

In binary system numbers are represented in 0's and 1's, so bitwise AND(&) will return 1 only when both the corresponding bits are 1 simultaneously else it will return 0.
*/

/*
a b a&b
0 0  0
0 1  0
1 0  0
1 1  1
*/
let num1 = 5;
// Binary representation of 5 : 0 1 0 1

let num2 = 7;
// Binary representation of 7 : 0 1 1 1

console.log(num1 & num2);         // 5

/*Bitwise OR (|)
Bitwise OR is denoted by '|'. It is used between two numbers, and the bitwise OR operation is performed on each corresponding bit of the two numbers.

Bitwise OR(|) will return 1 if any one of the corresponding bits is 1, else it will return 0.


index.js
*/
let n1 = 5;
// Binary representation of 5 : 0 1 0 1

let n2 = 8;
// Binary representation of 7 : 1 0 0 0

console.log(n1 | n2);         // 13

/*
a b a|b
0 0 0
0 1 1
1 0 1
1 1 1


*/
/*
Bitwise NOT (~) // it binary value can be changed 0-0000 -> 1111(-1)
Bitwise NOT is denoted by '~', it is used on a single number. Bitwise NOT operator inverts all the bits (0 is inverted to 1 and 1 is inverted to 0) of the given number and returns the new number as output.


index.js
*/
let val1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let val2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

let val3 = -8;
// Binary representation of -8 : 1 1 1 1 0 0 0

console.log(~val1);    // -6
console.log(~val2);    // -9
console.log(~val3);    // 7

/*
Bitwise XOR (^)
Bitwise XOR is denoted by '^'. It is used between two numbers, and the bitwise XOR operation is performed on each corresponding bit of the two numbers.

In binary system numbers are represented in 0's and 1's, so bitwise XOR(^) will return 1 only when both the corresponding bits are different else it will return 0.

For example : "1 ^ 0 = 1", "0 ^ 0 = 0", "1 ^ 1 = 0", "0 ^ 1 = 1"
*/
/*
a b a^b
0 0 0
0 1 1
1 0 1
1 1 0

*/

let b1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let b2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(b1 ^ b2);     // 13

/*
Left Shift (<<)
Left shift operator is denoted by '<<'. It shifts the bits of the left operand to the left, by a number of positions specified by the right operand. 0 comes in the place of the least significant bit after each shifting is done.

For example, the binary representation of 5 is '00000101',

Now, when we use '5 << 2', it means we want to shit the binary representation of 5 left by 2 positions and then it becomes '00010100',

The number whose binary representation is '00010100', is 20.

Thus '5 << 2' = 20.


index.js
*/
let a1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let a2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(a1 << 3);     // 40
console.log(a2 << 2);     // 32

/*The left shift operator effectively multiplies the left operand by 2 to the power of the right operand.
*/

/*
Right Shift (>>)
Right shift operator is denoted by '>>'. It shifts the bits of the left operand to the right, by a number of positions specified by the right operand preserving the sign of the original number.

*/

let v1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let v2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(v1 >> 3);     // 0
console.log(v2 >> 2);     // 2