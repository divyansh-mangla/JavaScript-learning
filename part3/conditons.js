let num1 = 5;
let num2 = 8;
if (num1<num2){
    console.log("num2 is greter than num1");
}
else{
    console.log("num1 is greater than num2")
}
// to check if the arrray is empty or not 


let items = []
if(items.length=== 0 ) console.log("Array is empty")
else console.log("Array is NOT empty")
items[0] = 'divyansh';
console.log(items)


// Unlike the loose equality operator (==), the === operator checks both the value and the data type of the operands without performing type conversion 
// 
let a = 0;
let b ="0";

console.log(a == b);// true 
console.log(a === b);// false