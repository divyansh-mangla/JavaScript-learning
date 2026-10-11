// if a variable is declared inside a code block {...} . it will be accessed only inside the code block only 

// closure - a function bundles with its lexical scope is a closure . 
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}
let counter = makeCounter(); //it make count = 0 and  it return a funciton


// but after line 11 a function is returned to counter so , execution context is created but after its executtion , it is cleared out of call stack , 
// but how the function returned still have hold to count varibale which is inside makeCounter , 
// thats because the function remeber the lexical scope , (which is its varibale) 


console.log(counter()); // output 0 and count increased to 1;
console.log(counter());
console.log(counter());

// In JavaScript , every function , code block and the script as a whole have an internal(hidden) associated object known as the Lexical Enviroment.

// the Lexical Enviroment object consists of two parts :
//1. Enviroment Record - an object that stores all local variabled as its properties (and some other properties like the value of this )
//2. A reference to the outer lexical enviroment, the lone associated with the outer codde. 


// A closure gives access to all the variables of it's parent function even after the that parent function has returned or executed. 
// The function keeps a refernce to it's outer scope which preserves the scope chain throughout the time


