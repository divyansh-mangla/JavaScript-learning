const prompt = require("prompt-sync")();




let user = {
    nane: "John",
    age: 30,
}
user.sayHi = function(){ // function expression to create a function and to assign it to a user property
    console.log("Hello!");
};

user.sayHi();

//******* A Function that is a property of an object is called its method . *********


// sayHi --> Method of the object user.


// another syntax for that 

usr={
    sayHi(){                              //same as "sayHi: function(){......}"     
        console.log("Hello");
    }
};


//***. "THIS" IN Methods */..
/* it's common that an object method needs to access the information stored in the object to do its job.
For instance, the code inside user.sayHi() may need the name of the user.

To access the object, a method can use the this keyword.*/

let user7 = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

/*But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user 
and overwrite user with something else, then it will access the wrong object.*/

/*let student = {
    name: "abhi",
    age:19,

    sayHI(){
        console.log(user.name); // not a good practice instead of this use this.name
    }
};

let teacher = student;
student = null;

teacher.sayHI(); // undefined or error as sayHI method was only defined for the student object .
*/


//******* "this" is not bound ******

//In JavaScript, keyword this behaves unlike most other programming languages.
//     It can be used in any function, even if it’s not a method of an object.


// READ IN JAVASCRIPT.INFO OBJECT---> THIS METHOD.


// calling withoud an object : this == undefined

// function hello(){
//     console.log(this);
// }
// hello();


//When a function is called in the “method” syntax: object.method(), the value of this during the call is object.


function makeUser(){
    return {
        name:"John",
        ref:this
    };
}

let John = makeUser();

console.log(John.ref.name);// undefined



// create a calculator 

let calculator = {
    read(){
         this.a = +prompt("first value ","");
        this.b = +prompt("second value","");
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }

}
calculator.read();
console.log(calculator.sum() );
console.log( calculator.mul() );

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;

    },
    showStep() {
        console.log(this.step);
        return this ;
    }

};
ladder.up().up().down().showStep().down().up().showStep();