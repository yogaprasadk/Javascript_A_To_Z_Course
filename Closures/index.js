// closures
/* 
Closures is a combination of functions  bunded together with referenced to the surrounding
state.
*/

// lexical scoping
let name = "mozilla"
function outerFunction(){
          var name = "Mozilla" //block scope
          function innerFunction(){
                    let name = "inner"
                    console.log(name) // inner 
          }
          innerFunction()
}
outerFunction(); //Mozilla
// mozilla