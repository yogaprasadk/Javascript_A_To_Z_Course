/*
it's essential to note that there are primarily three types commonly used.

(a) For loop

(b) While loop

(c) Do-while loop

Since we are mining into JavaScript, it's important to note that, JavaScript encompasses two additional loops within its domain. This stands as a particularly noteworthy aspect of JavaScript to remember.

(d) For/in loop

(e) For/of loop
*/
 //forEach Loop

 /* The forEach loop in JavaScript provides a concise and built-in way to iterate over the elements of an array without the need for explicit indexing. Unlike traditional for loops, which rely on index-based iteration, the forEach loop directly accesses each element of the array, making the code more readable and expressive.*/
 //syntax
 /* array.forEach(function() {
    // Code block to be executed on each iteration
});*/

/* Example */
let numbers = [1,2,3,4,5,6,7,8,9,0];
numbers.forEach(function(number,index){
          console.log(`Element at ${index} : ${number}`)
})


let fruits = ['Apple','orange','Mango'];
fruits.forEach(function(fruit,index){
          console.log(`${fruit} : ${index}`)
})

// for in loop
/* The for...in loop in JavaScript is used to iterate over the properties of an object.*/

/*
for (variable in object) {
          // Code block to be executed on each iteration
}*/

const person = {
          name: 'john',
          age: 21,
          occupation: 'Software Engineer',
};
for(const key in person){
          console.log(key + ": "+person[key])
}

// for of loop
/* The  for of loop enhances code readability by focusing on the elements of the iterable*/

let array = [12,3,5,23,423]
for(let con of array){
    console.log(con);
}

/*
12
3
5
23
423
*/