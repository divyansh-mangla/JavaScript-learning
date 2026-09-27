const prompt = require("prompt-sync")();

// there are four logical operators in javascript 
// || , && , ! and ?? (nullish coalescing

// in the claasical programming . the logical OR is meant to manipulate boolean values only . If any of its argruments are true , it returns true , otherwise it returns false. 
// in JavaScript , the operator is alittel bit trickier and more poweful .

if (1 || 0){
    console.log("truthy!")
}

// OR ||
// evaluates operands from left to rigfht .

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName|| lastName|| nickName||"Anonyous");
// it will return SuperCoder as its the first truth 
// the operator stops evaluating as soon as it find the first truth 
// if the operator doesn't find the truth and it will return the last false;

// &&(AND)
// AND finds the first falsy value;

// result = value1 && value2 && value3;
// if all are true the return the last truth operand

console.log(1 && 5);// 5 is the last truly value
console.log(null && 5);

// !(NOT)
console.log(!true);
console.log(!!0); // converts zero into boolean
console.log(!!null);//false
console.log(Boolean(null));//false


// tasks

console.log(console.log(1)|| 2|| console.log(3));
// first it evaluated console.log(1) and display 1 in terminal , console.log() returns undefined so it moves ahead
   // or goes to the second operand searching for truth and it find at second operands , then return it so consol.log prints 2..
   // it never reaches to console.log(3) -->> it doesnt get printed in the terminal 

console.log(console.log(1) && console.log(2) ); 
// 1 then undefined 


// Check the login 

let input = prompt("Who's there?","");

if(input == "" || input == null ) console.log("Canceled");
else if( input == "Admin"){
    let password = prompt("Password?","");
    if(password == ""|| password == null) console.log("Canceled");
    else if (password == "TheMaster") console.log("Welcome!");
    else console.log("Wrong Password");
}
else console.log("I don't know you");

