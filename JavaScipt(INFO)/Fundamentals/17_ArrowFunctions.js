// another very simple syntax for creating functions , often better than function expression
// let func = (arg1,arg2,arg3)=> expression;

const prompt = require("prompt-sync")();


let sum = (a,b)=> a+b; // implicit return doesnt need to type return keyword
/* this arrow function is shorter form of :
    let sum = function(a,b){
        return a+b;
    };
    */
console.log(sum(1,2));//3

let sayHi = () => console.log("Hello!");
sayHi();


let age = prompt("what is your age?",18);


let welcome = (age<18)?
() => console.log('hello!'):
() => console.log('greetings!');

welcome();

let sum1 = (a,b)=>{
    let result = a+b;
    return result;
};
console.log(sum(3,7));//10


let ask = (question , yes, no)=>{
    if(question ==='yes') yes();
    else no();
}
ask('yes',
    ()=> console.log("you agrees"),
   ()=> console.log("you cancel the execution"))


function createTeaMaker(){
    return function (teaType){
        return `Making ${teaType }`;
    };
}
let teaMaker = createTeaMaker();
console.log(teaMaker); // [function(anonymous)]

let result = teaMaker("green tea");
console.log(result);