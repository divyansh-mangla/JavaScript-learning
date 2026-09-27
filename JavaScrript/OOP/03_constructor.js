//The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

//That can be done using constructor functions and the "new" operator.

//*** constructor functions */
// 1 . they are same the regular function 
// 2. they are named with capital letter first.
// 3. THey should be executed only with "new" operator.

function User(name) {
    this.name = name;
    this.isAdmin =false;
}
let user =  User("Jack");

console.log(user.name);
console.log(user.isAdmin);

// the new keyword in javaScript is an operator that used to create an instance of an object from a constructor function or a class.

//************ NEW OPERATOR WORKING **************/

/*When a function is executed with new, it does the following steps:

   1. A new empty object is created and assigned to this.
   2. The function body executes. Usually it modifies this, adds new properties to it.
   3. The value of this is returned.*/


function User2(name) {
    if (!new.target) {// if you run me without new
        return new User2(name); // i will add new for you 
    }
    this.name = name;
}

let john = User2("John");
console.log(john.name);// john
// now i can call an function , make an object out of it and i dont new need to take care about new..
