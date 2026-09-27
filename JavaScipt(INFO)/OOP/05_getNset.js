// there are two types of properties -- 1. data proterties , 2. accessor property 

// Getters and Setters ---> accessor property 

// basic syntax : objct literals
let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name , this.surname] = value.split(" ");
    }
};

console.log(user.fullName); // get and you may notice we don't need parantheses 

user.fullName ="Divyansh Mangla"  // setter we dont need parantheses to run this 
console.log(user.name);
console.log(user.surname);

// Defining them via Object.defineProperty

const student = {
    firstName: "Anna",
    lastName: "Gomez"
};

Object.defineProperty(student,'fullName1',{ 
    get () {
        return `${this.firstName} ${this.lastName}`;
},
set(value) {
    [this.firstName , this.lastName] = value.split(" ");
}
});

console.log(student.fullName1);

student.fullName1= "Ayush Khanna";
console.log(student.firstName);

for(let key in student) {
    console.log(key); // firstName , lastName

}

// smarter getters/ setters --> keep the value in a seperate property 

let user2 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user2.name = "Pete";
console.log(user2.name); // Pete

user2.name = ""; // Name is too short...


