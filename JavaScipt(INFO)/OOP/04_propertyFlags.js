// object property is actually a more flexible and powerful thing.
// object properties , besides a value have three special attributes ( so-called "flags"):
// 1. writable - if true , the value can be changed . 
// 2. enumerable - if true, then listed in loops ( for .... in )
// 3. configurable - if true , the property can be deleted and these arrributes canbe modified 


// default values for these flags are true . 

const obj = {
    x:10,
    name:"divyansh"
};


// getOwnPropertyDescriptor returns an objext descibing the configuration of a specific property on  a given object 

console.log(Object.getOwnPropertyDescriptor(obj,'x'));//{ value: 10, writable: true, enumerable: true, configurable: true }
// value is not a flag , but it's part of the same decriptor object 


const user = {};

Object.defineProperty(user, 'id', {
  value: 101,
  writable: false,
  enumerable: false,
  configurable: false
});
/// the object with value, writable , enumerable , configurable  - is the descriptor 

user.id = 999;              // silently fails in non-strict mode, throws in strict mode
console.log(user.id);       // 101
console.log(Object.keys(user)); // [] — hidden from enumeration
delete user.id;              // fails, configurable is false

console.log(Object.getOwnPropertyDescriptor(Array.prototype , 'push'));


/// WRITABLE:FALSE
const config = {};
Object.defineProperty(config, 'version', { value: '1.0', writable: false, configurable: true });

Object.defineProperty(config, 'meta', { value: { env: 'prod' }, writable: false, configurable: true });
config.meta.env = 'dev';   // works fine — meta itself is locked, its contents aren't
console.log(config.meta.env); // 'dev'

// ENUMERABLE: false
// Hides the property from enumeration-based operations, but it's still directly accessible.

const acc = {};

Object.defineProperty(acc, 'password' ,{value: 'secret' , enumerable: false , configurable: true , writable : true});
console.log(acc.password);// 'secret' - direct access still works
console.log(JSON.stringify(acc)); // {} - hidden from serialization 

for(key in acc){
    console.log(acc[key]); // if true - 'secret'
}

// configurable : false
/*The strictest flag. Once set, you cannot:

 1.delete the property
 2.change any other flag (with one narrow exception below)
 3.redefine it as a different kind of property (data ↔ accessor)
*/

const locked = {};
Object.defineProperty(locked, 'x', { value: 1, configurable: false, writable: true });

Object.defineProperty(locked, 'x', { enumerable: false }); // throws 

// Exception: if configurable: false but writable: true, you're still allowed to toggle writable from true to false (a one-way ratchet),
//  and you can still change the value via normal assignment or defineProperty. You just can't go from false back to true, and you can't touch enumerable or configurable itself.


// clone object with attributes 

let clone = Object.defineProperties({},Object.getOwnPropertyDescriptor(obj));