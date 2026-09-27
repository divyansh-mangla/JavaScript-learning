// recent adding to the language . old browsers need polyfills

// ?? (nullish coalescing operator)
// it treats null and undefined similary , we'll say that a value is defined if its not Null or Undefined.

// a??b
// if a is defined , return a;
// if a is undefined, return b ;
// it returns the first argument that's not null/undefined

// a ??b can be return as 
let a = 5;
let result = (a!== null && a!== undefined)? a:b;

let user;
console.log(user?? "Anonymous"); // return Anonymous

//  ||(OR) doesnt distinguish between false , 0 , null , undefined and "" (empty string).--> they all are the falsy values .

let height = 0;

console.log(height || 100);// prints 100
console.log(height ?? 100);// prints 0

// && --> returns first false value 
// || --> returns first truly value
// ?? --> returns first defined value 

let h;
let c;
let d = (h ??c); // return undefined 
console.log(d);// prints undefined


// ? continue statement doesnt work with ternary operator