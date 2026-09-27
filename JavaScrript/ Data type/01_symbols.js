/* A Symbol is a primitive value in JavaScript, just like string, number, or boolean, 
   but with one defining trait: every symbol you create is guaranteed to be unique, 
   even if you give two symbols the exact same description.
   */




const s1 = Symbol('id');
const s2 = Symbol('id');

console.log(s1 === s2);        // false — different symbols, same description
console.log(typeof s1);        // "symbol"


let id = Symbol("id");
console.log(id + "s"); // alert(id) if we run in a browser will show an error that can't convert symbol to string 
// cannot convert a Symbol value to a string 
// we can id.toString() to convert them into string 
console.log(id.description);//id


//Symbols are, at their root, a second kind of property key that JavaScript introduced 
// specifically to guarantee no collisions.

const sym = Symbol('secret');

const obj = {
  normalKey: 'visible',
  [sym]: 'hidden-ish'
};

console.log(obj.normalKey);  // 'visible'
console.log(obj[sym]);       // 'hidden-ish' — must use bracket notation with the symbol itself


// Symbol-keyed properties are hidden from normal enumeration
// that's include object.keys() , for....in , JSON.stringify

// but symbols aren't secret - there's a dedicated API to see them 


console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(hidden)]
console.log(Reflect.ownKeys(obj));               // ['visible-keys-too', Symbol(hidden)]

// string can be acceseed through dot or [ bracket ] notation , but symbols can only be accessed through [bracket ] notation 

