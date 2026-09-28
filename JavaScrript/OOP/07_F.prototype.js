// using constructor --> new object creation and convention - first letter capital 

let animal = {
    eats: true,
    jump: true
};
function Rabbit(name){
    this.name = name;
}



// console.log(Rabbit.prototype) // {} - an ordinary , empty object , created automatically 
console.log(Rabbit.prototype.constructor == Rabbit);// default F.prototype 
console.log(Rabbit.constructor);// Rabbit is 


Rabbit.prototype = animal ; // it states that " when a new Rabbit is created , assign its [[prototype]] to  animal"


let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ == animal
console.log(rabbit.constructor);

for(let key in rabbit){
    isOwn = rabbit.hasOwnProperty(key);
    if(isOwn) console.log(`ours:${key}` );
    else  console.log(`Inherited ${key}`);
}

// every regular function in JavaScript , the moment it's created , automatically gets and ordinary object propery called .prototype .
// F.prototype only matters at the exact moment new f()