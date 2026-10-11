//asynchronous programming is a process that allows an application to run a second set of instructions while focusing on its primary or basic process.
// allow better user experience .
// reduced inefficiences form an applicationa and efficient data collection . 


// if we use set time out it works asynchronously but if we put setTimeout inside a function , then they will run synchronously . 
// asynchronous actions --> actions that we intiate now, but they finish later.


// callback = a function that is passed as an argumnet to another function 

//              used to handle asynchronous operations:
//              1. Reading a file 
//              2.Network Requests
//              3.Interacting with databases.
//              // "hey, when you're done , call this next"


setTimeout(function(){
    console.log("timer")
},5000);

function x(y){
    console.log('x');
    y();
}
x(function y(){
    console.log('y');
});

// output  x --> y-->timer 

// if x take 30 seconds to execute so it will block main thread and call stack 
// that's why use async for heavy tasks. 
