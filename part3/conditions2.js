const prompt = require("prompt-sync")({ sigint: true });


("use strict");
let year = prompt("are you divyansh mangla?", "");
let result = year.toLowerCase();
if (result == "yes") console.log("you are welcome!");

// a number 0 , "" , null , undefined and NaN all become false . because they are so called "falsy" values.
// other values becomes true, so they are called "truthy".

let age = prompt("What's your age darling","");
let accessAllowed = (age>18) ? "lets have some fun" : false; // here age is string as we are taking input but it will become int behind the scene.
console.log(accessAllowed);

let age2 = prompt("age?","");
let message = (age2<3) ? 'hello baby!!': (age2<18)?"hello!!":(age2<100)?"Greeting!!":' Mare nhi abhi tak tu!!'
console.log(message)


let begin = prompt("Whats the 'official' name of the JavaScript? ","");
result = begin.toLowerCase();

if (result == "ecmascript"){
    console.log("Right!");
}
else{
    console.log("You don't know? 'ECMAScript'!");
}
