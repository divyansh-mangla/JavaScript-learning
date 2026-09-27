let computer = {
    cpu: 12,
    gpu:15,
}
// console.log(typeof computer)// object

let lenovo = { 
    screen : "HD",
    __proto__:computer,
};

let tomHardware = {};

console.log(`computer`,computer.__proto__);// to access any prototype of any object 
console.log(`lenovo`, lenovo.__proto__);



let genericCar = {
    typers:4
}
let tesla = {
    driver:"AI"

}
Object.setPrototypeOf(tesla, genericCar)

console.log(Object.prototype);