// creating and adding some objects from outside
let obj= {
          name: "Yogaprasad",
          age : 21,

}
obj.color = "white"


// object cloning

/* to clone a object from one object use "..." operator(spread Operator)*/
// obj.job = "webdev"
let obj2 = {...obj}

obj.job = "webdev"
console.log(obj)
console.log(obj2)

// assign method
// assign method is used to copy the values of all enumerable own properties from one or more source objects

let obj3 = {k:"ba",s:"am"}

let des1 = Object.assign({},obj,obj3)
obj.job2="freelancer"
console.log(obj)
console.log(des1)


// using iterative method to clone object

let new1obj = {j:1,k:2,l:3,m:4}

// create an empty object
let new2obj = {}

// iterate over the keys of the object

for(let key in new1obj){
          // assign the value of the key to the new object
          let newkey = key

          let newvalue = new1obj[key]

          new2obj[newkey] = new1obj
}
new1obj.n = 5
console.log(new1obj)



// garbagecollector
// the garbage collector is a process that automatically frees up memory occupied by objects that are no longer used