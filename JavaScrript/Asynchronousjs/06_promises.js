// What are promises ? 
// A Promise is an that holds a future value of asyn operation.
// Example:- Requesting data from the server , the promise , promises us that i will get back the data from the server. 
// 3 Stage:- 
// 1.Pending 2.Fullfilled 3. rejected


// let promise = new Promise( function(resolve , reject){
// ....... .... .... the function which is passed to new Promise is the executor . 
// resolve , reject are the callbacks provided by the javascript itself . 
// } 
// When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

//    resolve(value) — if the job is finished successfully, with result value.
//      reject(error) — if an error has occurred, error is the error object.

// let promise = new Promise (function(resolve , reject) {
//       const name = false ;
//       if(name){
//             resolve("resolved babby!!");// state - fullfilled // result -"resolved babby!!"
//       }
//       else reject("nothing!!"); // state - rejected //result - "nothing!"
// });

// console.log(promise); // this catched the intial phase of the promise if lets say a promise take some time to get fullfilled while being in pending state it will only show pending state only ..

const promise = new Promise ((resolve , reject) => {
      const randomNumber = Math.floor(Math.random() * 10);
      setTimeout(() => {
            if(randomNumber>4) resolve("Well done!1");
            else reject("guess again");
},2000)
});
promise.then((value) =>{
      console.log(value);
}).catch((error)=>{
      console.log(error);
})
// .catch(f) is completer analogous of .then(null, f);
// To summarize, the executor should perform a job (usually something that takes time) and 
// then call resolve or reject to change the state of the corresponding promise object.


new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 4000);
})
  .finally(() => console.log("Promise ready")) // triggers first
  .then(result => console.log(result)); // <-- .then shows "value"