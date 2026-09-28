let obj = {};
//alert(obj); generates '[object object]'
// 

let obj1 = new Object() ; // where Object is a built in object constructor function 



// changing native prototype

String.prototype.show = function(){
    console.log(this);
};

"BOOM!".show();

console.log("NOOB");



let animal = {
    eats: true
};

let rabbit = Object.create(animal,{
    jumps:{
        value:true
    }
}); // same as {__proto__ : animal}

console.log(rabbit.eats); //true

console.log(Object.getPrototypeOf(rabbit) === animal); //true

Object.setPrototypeOf(rabbit, {});// change prototype of rabbbit from animal to {}

// create is a modern way to clone an object with deep cloning
//This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].
      //let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor(obj));

    