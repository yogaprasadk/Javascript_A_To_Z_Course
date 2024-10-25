let secondelement = document.getElementById('sdiv')

// cssText
secondelement.style.cssText = "background-color:red; font-size:20px; padding: 0.5rem";

//Attributes
// 1.setAttribute
let firstelement = document.querySelector('#firstdiv')
firstelement.setAttribute('style',"padding:20px;margin:30px;");

// classname
let firstname1 = document.querySelector('#firstdiv')
firstelement1.className = "type1,type2"

// classList
let classlistname = document.querySelector('#firstdiv')
// add
classlistname.classList.add('secondclass')
// remove
classListname.classList.remove('secondclass')
// contains
classListname.lassList.contains('secondclass')