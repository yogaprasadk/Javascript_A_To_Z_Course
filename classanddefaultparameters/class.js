class human{
          // properties
          age = 21
          #wt = 45  //private - # is used to make variable or class to make private
          height =165

          // methods/functions(behaviour)
          #walking(){
                    console.log("I am //Walking",this.#wt)
          }

          sleeping(){
                    console.log("I am sleeping")
          }
// getters and setters method or accessors
          get fetchweight(){
                    return this.#wt;
          }

          set modify(val){
                          this.#wt= val
          }

// constructor
          human(nage,nweight,nheight){
                    this.age = nage
                    this.weight = nweight
                    this.height = nheight

          }
}
let obj = new human(34,56,23);
// console.log(obj.age)
// obj.walking();
// console.log(obj.#wt)
// console.log(obj.age)
// private can be accessed through get method
// console.log(obj.fetchweight)
// console.log(obj.weight())

// default parameters
function defpara(myname = "Yogaprasad"){ // if i pass parameters value is assigned in parameters here it will  print it
          console.log("My name is",myname) //Yogaprasad
}
defpara("Yoga") // if ipass here it will print it Yoga

// arrays and objects passed in parameters

function defobj(value ={name:"Yoga",age:21}){
          console.log(value)
}
defobj() //  {name: 'Yoga', age: 21 }

function defarr(val = ["gta4","gta libercity stories"]){
          console.log(val) 
}
defarr() //[ 'gta4', 'gta libercity stories' ]

// calling value as null and undefined
function nullvalue(variable = 89){
          console.log(variable)
}
nullvalue(null) // null

function undefinedvalue(vari = 45){
          console.log(vari)
}
undefinedvalue(undefined) // 45

function getage(){
          return 21
}

function printdetails(name,age = getage()){
          console.log(name,age)
}
printdetails("Yoga")  // Yoga 21