let balance = 120

console.log(typeof(balance))

let name1 = "divyansh";
console.log(typeof(name1))

let anotherBalance = new String(120)

console.log(typeof anotherBalance) // everything is a object , primitive datatype is converted into non primitive


// null and undefined


// undefined
 // the meaning of undefined is " value is not defined"
let firstname;
firstname = "divyansh";
firstname = undefined;
console.log(firstname)


// null
// In JavaScript , null is not a "reference to a non-existting object" or a "null pointer" like in some other languages.
    // its just a special value which represents "nothing", "empty" or " value unknown";
let lastname = null;
console.log(lastname)

//not defined
// console.log(middlename) // middle name is not defined

// string

let myString="kya haal hai !!!" // can use single quotes also its doesnt really matter

// defined using backticks ` `
// backticks are "extended functionality " quotes. They allow us to embed variables and expressions into a string by wrapping them is ${...}, for example:
let greetMessage = `Hello ${myString}`; // string interpolation 
console.log(greetMessage);


/// SYMBOL  // the only guarante to be unique;
// The sybmol type is used to create unique identifiers for objects.
let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1 == sm2) // false;

console.log(typeof (null) ); // official error of javaScript, and it was kept for Compatibility . definitely null is not an object . the behaviour of typeof is wrong here
// typeof  is an operator , not a function .The parentheses here aren't a part of type of . It's the kind of parantheses used for mathematical grouping




// TASKS

let named = "Ilya";

console.log (`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${named}`);
