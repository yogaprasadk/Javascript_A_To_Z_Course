// DOM - DOCUMENT OBJECT MODEL
// document

// get element by id
document.getElementById("fpara");

// get element by class
document.getElementsByClassName("cspara");

// get element by tagname
document.getElementsByTagName("p");

// Query Selector

// id
document.querySelector("#fpara");

// class
document.querySelector(".cspara");

// tag
document.querySelector("p");

// query selector All

// tag
document.querySelectorAll("p");

// class
document.querySelectorAll(".cspara");

// id
document.querySelectorAll("#fpara");

// innerHTML (it is written in browser console)
button.innerHTML = <p>hello World</p>

// textcontent (it is written in browser console)/
/*
let element = document.querySelector('#fpara')

element
// <div id="fpara">...<div/>

element.textContent

\n \n This is my first paragraph \n \n 

element.InnerContent

first paragraph
*/

/*
create and append <h1> tag through js

// step1 - create element
let htag = document.createElement('h1');

// step2 - addcontent to h1 element

htag.textContent = "this is my first heading tag"

// step3 - append h1 element to body element

let bodytag = document.querySelector('body');

// append it
bodytag.appendChild(htag)

*/

// positions
/*
let mydiv = document.querySelector('#mydiv')

let createelement = document.createElement('span')

createlement.textContent = 'Hello World'

// innerAdjacentHTML
mydiv.innerAdjacentHTML('beforebegin',createelement)

// helloworld ........

// innerAdjacentElement
beforebegin - at start of the content will be displayed

mydiv.innerAdjacentElement('beforebegin',createelement)

// firstpara 
// Helloworld

*/ 
let mydiv = document.querySelector("#mydiv")

let newele =  document.createElement('span')
newele.textContent = "Yoga Prasad"

mydiv.insertAdjacentElement('beforebegin',newele)

/*

output:
hello jee yoga prasad
first
second 
third

*/