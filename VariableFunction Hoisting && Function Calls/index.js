
//function call
sayname("Yogaprasad")
function sayname(finalname){
          console.log(finalname)
}

// variable hoisting

console.log(a)// undefined
var a  = 10;
console.log(a)// 10

// function hoisting
// con()//  function is called  it will give output as reference error
let con = function(){
          console.log("Hello ji")
}
con() // hello ji 

// function stack(recursion)
function greetname(greet,fullname) {
          console.log("Hello ",fullname)
          greet()
}


function greet(){
          console.log("Hello")
}

greetname(greet,"Yogaprasad") // Hello Yogaprasad

// return function

function solve(number){
          return function(number){
                    return (number * number)
          }
}
let ans2 = solve()
let finalans = ans2(2)
console.log(finalans)


const arr = [
          function(a,b){
                    return a + b;
          },
          function(a,b){
                    return a  - b;
          },
          function(a,b){
                    return a ** b
          }
]

let first = arr[0]
let ans = first(25,2)
console.log(ans)

let second  = arr[1]
let ans1 = second(2,5)
console.log(ans1)

let obj = {
          age:25,
          weight: 34,
          height: 180,
          greet: ()=>{
                    console.log("Hello Bhaiya")
          }
}
obj.greet()