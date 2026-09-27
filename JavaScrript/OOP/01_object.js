// difference of objects versus primitives is that objects are stored and copies by"refrence" , 
// whereas primitive values: strings, numbers, booleans , etc - are always copies"aa a whole value".
















const prompt = require("prompt-sync")();

let user = new Object();
console.log(typeof user); // object --> "object constructor " syntax

let person = {};
console.log(typeof divyansh); // object ---> "object literal "syntax
user = {
  name: " John ",
  age: 30,
};
console.log(user.name); //John
console.log(user.age); //30

user.isAdmin = true;
console.log(user); //{ name: ' John ', age: 30, isAdmin: true }

// delete a property
delete user.age;
console.log(user); //{ name: ' John ', isAdmin: true }

// for multi word properties , the dot access doesn't work:
// user.likes birds = true; // unexpected identifier 'birds' will shoe error

// alternative way is to use square brackets []:
user["likes birds"] = true;
console.log(user["likes birds"]); // true

// another way is to make an variable

let key = "likes movies";
user[key] = true;
console.log(user);

// the extra varible can be much useful

//let find = prompt("What do you want to know about the user?","name");
//console.log(user[find])

/*let fruit = prompt("Which fruit to buy?","apple");// here apple is the default value ,if user doesnt give the input 


let bag ={
    [fruit]: 5, // we have to put it under square brackets . 
};

console.log(bag.mango);// 5 if fruit = "mango"*/

// square brackets are much more powerful than dot .

/*function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // other properties
    };
}

let guide = makeUser("lakshit" , 20);
console.log(guide.name);*/

// can shorten this code  bacause properties have same name as variables
function makeUser(name, age) {
  return {
    name,
    age,
  };
}
let guide = makeUser("Lakshit", 20);
console.log(guide.name);

// the key is always strings , whether you assign it a number

///..... IN OPERATOR ......\\\\\

let user2 = { name: "John", age: 30 };

console.log("age" in user2); // true, user2.age exits
console.log("phone" in user2); // false user2.phone doesn't exits

for (let key in user2) {
  console.log(typeof key);
  console.log(`${key}:${user2[key]}`);
}

// integer properties are listed in ascending order
// non integer properties are listed in creation order

let number = "+49";
console.log(+number); // here 49 will be returned and + sign inside the string is dropeed

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}

// thats how we can acces in the order of the creation 

////tasks\\\\
/*function isEmpty(object){
    let cnt = 0;
    for(let key in object ){
       // if the loop has started , that means there is atleast a property ;
       return false;

    }
    return true;
} */

function sumKey(object){
    let sum = 0;
    for(let key in object){
        sum+=object[key];
    }
    return sum;
}


let salaries = {
    "john": 100,
    "Ann": 160,
    "Pete": 130
}
console.log(sumKey(salaries));



let clone = {};// the new empty object 

for(let key in salaries){
    clone[key] = salaries[key]; // assign value and key to the clone 
}

console.log(clone) // it is refrencing to a difference object because we didnt do this " let clone = salaires" , we assigned values to a new object already made

// ....... object.assign ....\\\\
// it clone not copy

let clone2 = Object.assign({},salaries); // we can clone as many objects in one object 

console.log(clone2);

console.log(salaries === clone2) // false they both refrence to different memory object 

/// Nested cloning





let user3 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};



let clone3 = Object.assign({}, user3);

console.log( user3.sizes === clone3.sizes ); // true, same object // operator checks for refrental equality. , meaning it returns true only if both operand point to the exact same object instance in memory .

// user and clone share sizes
user3.sizes.width = 60;    // change a property from one place
console.log(clone3.sizes.width); // 60, get the result from the other one


////....structuedclone....\\\

let clone4 = structuredClone( user3);
console.log( user3.sizes === clone4.sizes) // false


