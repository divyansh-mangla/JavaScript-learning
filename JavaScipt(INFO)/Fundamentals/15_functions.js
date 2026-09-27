// to reduce code duplication 
// if we want to change something in recurring code , we can make a function out of it and use it when it is required , with the additional benefit of change once applied everywhere 

let userName1 = 'John';

function showMessage1() {
  userName1 = "Bob"; // (1) changed the outer variable

  let message1 = 'Hello, ' + userName1;
  console.log(message1);
}

console.log( userName1 ); // John before the function call

showMessage1();

console.log( userName1); // Bob, the value was modified by the function
// outer variable is only used when there is no local varibale 

let userName2 = 'John';

function showMessage2() {
  let userName2 = "Bob"; // declare a local variable

  let message2 = 'Hello, ' + userName2; // Bob
  console.log(message2);
}

// the function will create and use its own userName
showMessage2();

console.log( userName2 ); // John, unchanged, the function did not access the outer variable


// it performs some actions on the parameter given 
// when a value is passesd as a functions parameter , it's also called an argument.

// a parameter is the variable listed inside the parentheses in the functin decleration (it's a declaration time term).
// an argument is the value that is passed to the function when it is called .

// we declare functions listing their parameters, then called them using arguments.

// default parameter . 
function divyansh(text){ // (text = "empty message")
  if (text == undefined) text = "empty message";
 console.log(text);
}

function Worker(text){
  text = text|| 'empty'; // it will consider 0 as a false 
}

function showCount(count){
  // if count is undefined or null , show "unknown"
  console.log(count ?? "Unknown");
}
showCount(0);// 0
showCount(false);// false
showCount(null);// unknown
showCount();//unknown

// return is also a feature in javaScript

function checkAge(age){
  if(age>=18) return true;
  else return false;
}

function showMovie(age){
  if(!checkAge(age)){ console.log("lauda movie dekne duunga mai") 
    return ;} // a function with empty return or without it return undefined
  console.log("showing you the movie");
}

showMovie(7);

// a good practice is that a functio should do a single task at a time , because not only it will be easy to debug and test - its very existance is a great comment;