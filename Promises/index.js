// promises
/*
PRomises object represent the event completion of failures of an async operation and resulting value

// three stages
pending => initial state
fulfilled => operation success 
rejected => operation failed
*/ 

// syntax 
// new Promise((resolve, reject) => {}

// example for resolve
let firstPromise = new Promise((resolve,reject) =>{
          console.log("First Promise");
          resolve(1001);
})
// check in console it will show the status fulfilled

// example for reject 
let secondPromise = new Promise((resolve,reject) =>{
          console.log("Reject");
          reject(new Error("Internal Server Error"))
})
// check the status it will show internal server error

// using setTimeout

let thirdPromise = new Promise((resolve,reject) =>
{
          setTimeout(function name() {
                    console.log("My name is Yogaprasad")
          },2000)
          resolve(1);// if we don't give resolve in this line it will show the status "pending".
})

//  then() - Fulfilled
// catch() - rejected
 let Promise1 = new Promise((resolve,reject)=>{
          let success = true
           if(success){
                    resolve("Promise Fulfilled")
          }
          else{
                    reject("Failed / rejected");
          }
})

Promise1.then((message) => {
          console.log("Success: - "+ message)
}).catch((error)=>{
          console.log("Fails: - "+error)
})


// promises chaining 
let promiseChaining = new Promise((resolve,reject)=>{
          let success1 = true;
          if(success1){
                    resolve("Fulfilled")
          }
          else{
                    reject("Promise Rejected")
          }
})
promiseChaining.then((message1)=>{
          console.log("First msg"+ message1)
          return "Promise Fulfilled second msg";
}).then((message1)=>{
          console.log("Second msg"+ message1)
          return "Promise Fulfilled third msg";
}).then((message1)=>{
          console.log("Third msg"+ message1)
}).catch((error)=>{
           console.log("Error"+ error)
})


// all
let promise1 = new Promise((resolve,reject)=>{
          setTimeout(reject,1000,"Reject")
})
let promise2 = new Promise((resolve,reject)=>{
          setTimeout(resolve,1000,"Second")         
})

Promise.all((promise1,promise2)).then((msg)=>{
          resolve("Fulfilled"+msg)
}).catch((error)=>{
          error("Error"+msg)
})
