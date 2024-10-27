
function changetext(){

let fparag = document.getElementById('fpara')
          fparag.textContent = "Babbar"
}

let fpara = document.getElementById('fpara')
fpara.addEventListener('click',changetext);


// optimized code
// addeventlistener
fpara.addEventlistener('click',function(){
let fparag = document.getElementById('fpara');
fpara.textcontent = "Yogaprasad"
})

// removeeventlistener
fpara.removeEventlistener('click',function() {
          let rpara = document.getElementById('fpara')
          fpara.textContent = "Yogaprasad";
})

// Event objects - pass parameters to listeners

function changetext1(event){
          console.log(event)
          let fparag1 = document.getElementById('fpara')
                    fparag.textContent = "Babbar"
          }
          
          let fpara2 = document.getElementById('fpara')
          fpara.addEventListener('click',changetext);
          

fpara.addEventListener('click',function(event){
          console.log(event)
          let fpara = document.getElementById('fpara')
          fpara.textContent = "Yoga"
},)

// default objects
let anchortag = document.getElementById('fanchor');
anchortag.addEventListener('click',function(event){
          // it will change the particular attribute condition to false (anchortag if select not work)
          event.preventDefault()
          // changeswill be happened using textcontent
          anchortag.textContent ="hello Bhaiya"
}) 


// avoiding too many listener
let paragraph = document.querySelectorAll('p');

for(let index=0;index<paragraph.length;index++){
          let res = paragraph(index);
          res.addEventListener('click',function(event){
                    alert('You',index);
          })
}

// for best practices

/*
function alertpara(event){
alert("You have")
}

for(let index = 0;index<paras.length;index++){

          let para = paragraph(index)
          para.addEventListener('click',alertpara)
}

.using textContent (if ineed to see the content )

function alertpara(event){
alert("para:" + event.target.textContent)
}


// using full container
function alertPara(event){
alert("para:"+event.target.textContent)}

let divi = document.getElementById('paracontain')

divi.addEventListener('click',alertPara)


// if add span in paragraph

function alertPara(event){
if(event.target.nodeName==="SPAN"){
alert("Para",event.target.textContent)
}}


let divi = document.getElementById('paracontain')

divi.addEventListener('click',alertPara)  
*/


