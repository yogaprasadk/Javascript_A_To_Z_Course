// error handling - runtime error and compiletime error

// compiletime error

//1. syntax error 
// console.log(1

// Runtime Error
// 1.reference error
// console.log(x)
  

/* 
keywords used in error handling
try - used to enclose a block of code that might throw an error

catch - rectify the error

finally - will run everytime

*/


try {
          console.log("Try Block Start")
          console.log(x);
          console.log("TRy Block end")
} catch (error) {
          console.log("catch block start here")
          console.log("Your error goes here",error)
} 
// console.log(x) 
finally{
          console.log("It will run everytime as it is final")
}


// create a custom error
try{
          console.log(c);
}
catch(err){
          throw new Error("declare and print it");
          
}