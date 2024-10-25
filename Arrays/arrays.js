// creation arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr);
//  [1,2,3,4,5]

// array constructor
let arrc = new Array("123", 3, 5, 1);
console.log(arrc);
// ['123',3,5,1]

// access elements

//1st element
let arr1 = ["apple", "banana", "cherry"];
console.log(arr1[0]);
// apple

// lastelement
console.log(arr1[arr1.length - 1]);
// cherry

// insert at last element in array
arr1.push("kiwi");
console.log(arr1);
// ['apple', 'banana', 'cherry', 'kiwi']

// insert at first
arr1.unshift("orange");
console.log(arr1);
// ['orange','apple', 'banana', 'cherry', 'kiwi']

// insert at random
/*
To add an element/item at a random index inside an array we use the splice method.

The splice method adds or removes elements from an array at a specified index.
*/

// syntax:array.splice(startIndex, deleteCount, item1, item2, ...);

/*
n the above syntax only thing we need to keep in mind is that

If we only want to add new items then keep the 'deleteCount = 0',
startIndex : The index at which to start changing the array.
If startIndex is negative, it will begin that many elements from the end of the array. - If startIndex is greater than the length of the array, it will start at the length of the array.
If we don't wan't to add any item we can just ignore the item <parameters className="
"></parameters>
*/

const fruits = ["apple", "orange"];
fruits.splice(1, 0, "banana");
console.log(fruits);
// ['apple', 'banana', 'orange'].

// array filter
const arrfil = [-1, 2, 23, 212, 54, 12, 4, 12451];
const res = arrfil.filter(function (num) {
  return num > 0;
});
console.log(res);
// [2,23,212,54,12,4,12451]

// object filter
const objfil = [
  { name: "jog", age: 23 },
  { name: "joe", age: 45 },
];
const resobj = objfil.filter((name) => name.age > 30);
console.log(resobj);
// {name:'joe',age:45}
