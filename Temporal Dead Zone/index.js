// global scope

var age = 21
console.log(age)
{
          console.log(age)
}

if(true){
          console.log(age)
}
for (let index = 0; index < 2; index++) {
          console.log(age)
          
}

function name1() {
          console.log(age)
}
name1()

//function scope
function block(){
          var name = "Yoga"
          console.log(name)
}
block()
// console.log(name) // reference error

// blockscope

console.log(hi)
{
          const hi = 10 // reference error because it can be accessed 

}
console.log(hi) // reference error because it can be accessed for both let and const