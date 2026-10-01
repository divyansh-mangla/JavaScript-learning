// constructor method is automatically called by new .


class Vehicle {
    constructor(make , model){ // automaticall runs 
        this.make = make,
        this.model = model,
        console.log("runs as the instance of the class is declared ")
    }

    start(){
        return`${this.model} is a car from  ${this.make}`
    }

}

class Car extends Vehicle { // doesnt need to declare own constructor function (although it can have its own constructor function)
    drive(){
        return `${this.make}: This is an inheritance example`;
    }
}

let myCar = new Car("Toyota","Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());




// ENCAPSULATION  // restrict direct access

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance +=amount;
        return this.#balance;
    }
    getBalance(){
        return` $${this.#balance}`;
    }
}

let account = new BankAccount();
//console.log(account.getBalance());


//ABSTRACTION - hides the complex detail 

class CoffeMachine{
    start(){
        // call DB
        // filter value
        return` Starting the coffee machine `;
        
    }
    brewing(){
        //ccomplex
        return`Brewing Coffee`;
    }

    pressStartButton() {
        let mone = this.start();
        let mtwo = this.brewing();
        return `${mone} \n ${mtwo}`
    }
}


let myMachine = new CoffeMachine();
console.log(myMachine.pressStartButton());


//Polymorphism

class Bird{
    fly(){
        return 'Flying......eheheh'
    }
}
class Pengiun extends Bird{
    fly(){
        return`Penguins can't fly`
    }
}

let bird = new Bird();
let pengiun = new Pengiun();

console.log(bird.fly());
console.log(pengiun.fly());


//static - no object can use - class call it directly 

class Calculator{ 
    static add(a,b){
        return a+b ;
    }
}
let cal = new Calculator();
//console.log(cal.add(3,5)); // error add is not a function 

console.log(Calculator.add(3,6));

