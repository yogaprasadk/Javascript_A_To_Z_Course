/*
          There are two types of declaration in functions

          1.Functional Declaration
          2.Functional Expression

*/
//functional declaration
function greet(name){
          return `${name}`
}
console.log(greet("john"))
// john

// functional expression
/* In this declaration function can be assigned in a variable*/
const fun = function(name){
          return `${name}`
}
console.log(fun("john"))

// in ES6 Javascript The arrow function is introduced
const greet = (name) =>{
          return `${name}`
}
console.log(greet("john"))

// returning functions
function multiplier(factor){
          return function(number){
              return number * factor
          }
}
const double = multiplier(2)
console.log(double(5))
// 10
