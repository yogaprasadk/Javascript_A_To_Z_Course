// code1 

// to know the time running ofcode
// use --> perfomance.now()
let time1 = perfomance.now();

// this code will runtime is 0.4567000000
for(let i = 0;i<100;i++){
          let para = document.createElement('p');
          para.textContent = "Yogaprasad"
          document.body.appendChild(para);

}

let time2 = performance.now();

console.log(time2 - time1);




// this code runtime is 0.090000
let time3 = perfomance.now();

let my = document.createElement('div');
for (let index = 0; index < array.length; index++) {
          let para = document.createElement('p');
          para.textContent = "Yogaprasad";
          my.appendChild(para);
}

document.body.appendChild(mydiv);

let time4 = perfomance.now();

console.log(time4 - time3);

// reflow and repaint

/*
reflow - process of calculating position/dimensions of element

repaint - process of displaying element pixel by pixel
*/ 


// comparing to two codes the runtime will be differ because the code1 in add only paragraph so it takes more runtime and code2 takes less time because the paragraph is append into the div so it is taking less time.


// document fragment - light weight document object (when we append it cant reflow and repaint be done)
  
// best code
let fragment = document.createDocumentFragment();

          
for (let index = 0; index < array.length; index++) {
          let para1 = document.createElement('p');
          para1.textContent = "Yoga"
          // no reflow and repait for the below line
          fragment.appendChild(para1);
}
// the below line takes 1 repaint and 1 reflow
document.body.appendChild(fragment)