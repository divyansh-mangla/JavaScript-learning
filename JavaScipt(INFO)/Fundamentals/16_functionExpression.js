
sayHi("John")// will show an error cant acces sayHi before intialization

let sayHi = function(name){// create 
    console.log(`hello${name}`);
};
// as the function creation happens in the context of the assignment expression (to the righ side of = )
// this is a function Expression.


let funcc = sayHi; // creates a copy (no paranthese after sayHi )
// if there was any parantheses after sayHi it would return the return value in funcc , in this case there is no return value/
funcc();

// callback functions ..
// passing functions as value and using function expressions.

// .........IMPORTANT DIFFERENCE BETWWEN FUNCTION DECLARATIONS AND FUCNTION EXPRESSION........>>>>>

// A FUNCTION DECLERATION CAN BE CALLED BEFORE IT IS DEFINED .. BECAUSE  due to internal algorithms . when JavaScript prepares to run the script , it first looks for global function Declarations in it and creates the functions .
// we can think of it as an "intialization stage"
// and after all function declarations are processed , the code is executed . So it has access to these functions.

//  A FUNCTION EXPRESSION IS CREATED WHEN THE EXECUTION REACHES TO IT AND IS USABLE ONLY FROM THAT MOMENT.


