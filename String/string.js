/*
Creation of strings is possible in three ways, we can create a string using double-quotes(""), single-quotes('') and template literals or backticks(``).*/

// to check type
let firstname ="yoga"
let lastname = "prasad"
console.log(typeof(firstname))// string

//using double quotation
let name = "yogaprasad"
//yogaprasad
/* 
if the string in double quotation can be written as
"yoga
prasad"

here it will give result as error
*/

// using single quotation
let nam = 'yogaprasad'
//yogaprasad
/*
here using single quotation

if you write like this
let name = 'yoga
prasad'
console.log(name) 
it will give result as 
yoga
prasad

*/

// template string 
let abc = `Hi how are you`
console.log(abc)
// Hi how are you

/* String Methods */
// concatenation
let f = "yoga"
let l = "prasad"
console.log(f + l)
// yogaprasad

// concatenation using string literals
let f1 = "yoga"
let l1 = "prasad"
console.log(`${f1} and ${l1}`)

//length
let f2 = f1.length
console.log(f2)
// 4

// toUpperCase
console.log(f2.toUpperCase())
// YOGA

//toLowerCase
let f3 = "YOGAPRASAD"
console.log(f3.toLowerCase())
// yogaprasad

// substring 
console.log(f3.substring(0,4));//YOGA
console.log(f3.substring(4))//PRASAD

// separator
let array = "Yogaprasad"
console.log(array.split(" "))//[ 'Yogaprasad' ]
let arr = "once upon a time"
console.log(arr.split(" ")) // [ 'once', 'upon', 'a', 'time' ]
let hello = "hello \\ji \\kaise \\karna";
let sep = hello.split('\\')
console.log(sep)//[ 'hello ', 'ji ', 'kaise ', 'karna' ]

// join
let message = ['india', 'is','the','best']
console.log(message.join())//india,is,the,best

let message1 = ['india', 'is','the','best']
let message2 = message.join(" ")
console.log(message2) //india is the best
