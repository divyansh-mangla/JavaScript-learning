// alert automatically converts any value to a string to show it . Mathematical operations convert values to numbers.

// we are only studing primitive type data conversions only not about objects.

// String Conversion 

let value = true;
console.log(typeof value); // boolean

value = String(value);// now value is a string " true". a false become "false" , null becomes "null"
//....<<<MAKE SURE TO TYPE "String" , "Number"
console.log(typeof value);// string
console.log(Number(null));// 0 kinda strange if its nothing how can it be 0 
// Numeric Converison
console.log("6"/"2");//3
let str = "12abc";
console.log(typeof str)// string

let num = Number(str);
console.log(typeof num);//number
console.log(num) //NaN "not an number is also a number typeof"
/* undefined --> NaN
   null --> 0
   true and false ---> 1 and 0
   string --> number or NaN
   */

/*
  Boolean conversion 
  Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
  Other values become true.
  */
console.log(Boolean("0"));//its an non-empty string so true 
console.log(Boolean(" "));// there is space so it will be true
