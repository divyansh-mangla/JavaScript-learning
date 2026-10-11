// we may decide to execute a function not right now , bit at a certain time later . that's called "Scheduling a call".
// Two methods for it : 
//         1.setTimeout: allow us to run a function once after the interval of time.
//         2.setInterval: allows us to run a function repeatedly , starting after the interval of time , then repeating continously at the interval .

// These methods are not part of JavaScript specification. But they are supported in all browsers and Node.js runtime enviroments.
// part of WebAPI.

// syntax for setTimeout 
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
function sayHi(a){
    console.log(`hello ${a}`);
}
let last_name = 'mangla';
let first_name = 'divyansh';

setTimeout(sayHi,10000,last_name);// IT DOESNT WAIT 10 SECONDS .
setTimeout(sayHi,2000,first_name);

// wrong --> setTimeout(sayhi() , 1000); // setTime out expects reference to a function . but fnc() runs the function, and the result of ites execution is passed to setTimeout. in our case the result of sayHi() is undefined (the function return nothing ), so nothing is scheduled. 
// cancelling with clearTimeout 
// a call to setTimeout returns a "Timer Identifier" timerID that we can use to cancel the execution. 

let timerId = setTimeout(()=> console.log("never happens"), 2000);
console.log(timerId); // timer object with some additional methods in node.js // in a browser timer identifier is a number 
clearTimeout(timerId);
console.log(timerId);


// syntax for setInterval 
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// fucntion runs regularly after the given interval of time . 

// to stop further calls , we should call clearInterval(timerId);

let timeId2 = setInterval(()=>console.log('clock is ticking'),3000);
// repeat with interval of 3 seconds.

setTimeout(()=>clearInterval(timeId2),12100); // the above code runs 4 times then we clear the function . 



/// Nested timeout ;


// same fucntion
let timerId3 = setTimeout(function tick(){
    console.log('ticking');
    timerId3 =  setTimeout(tick , 2000); 
},2000);


setTimeout(()=>{clearInterval(timerId3 )},20000);


// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.