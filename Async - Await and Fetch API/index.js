//  async-await  

// async function
async function getData(){
          setTimeout(() => {
                console.log("Iam inside timeout")    
          }, 2000);
}
getData();

// await

// fetchA pi - It provide an interface resources includes across the network.

/*
four request should be handled by API

get - retrieve
put - update
post - Create
delete - remove
*/


/* check the website : JSONPLACEHOLDER.typicode.com - here you can get an api */


//fetching api
async function getAPI(){
 
// get request - async
let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

// let response = await fetch('https://jsonplaceholder.typicode.com/posts');

// parse JSON - async
let data = await response.json();

console.log(data)

}
getAPI();

//three scenario of API
// prepare URL / API ENdpoint -> Sync
// await / Fetch data -> network call -> Async
// Process Data -> Sync 


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts"

const options = {
          method: "POST",
          body: JSON.stringify({username: "Yogaprasad"}),
          headers: myHeaders,
}

async function getData() {
          const url = "https://dummyjson.com/posts";
          
          const response = await fetch(url);
          let data = await response.json();
          console.log("get data response:",data)
}


async function PostData() {
          const response = await fetch('https://dummyjson.com/posts/add',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                     title: 'I am in love with webdev ',
                     userId : 5,
                    }),
          })
          let data = await response.json();
          console.log("Post data  response:", data);
}

async function processData(){
          await postData();
          await getData();
}
processData()


