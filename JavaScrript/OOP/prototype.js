let computer = {
    cpu: 12,
    gpu:15,
}
// console.log(typeof computer)// object

let lenovo = { 
    screen : "HD",
    __proto__:computer,  // computer is prototype to/of lenovo . // means computer is in above hierrarchiacal level than lenovo 
};

let tomHardware = {};

console.log(`computer`,computer.__proto__);// to access any prototype to any  object 
console.log(`lenovo`, lenovo.__proto__);




let genericCar = {
    typers:4
}
let tesla = {
    driver:"AI"

}
Object.setPrototypeOf(tesla, genericCar) // genericCar is prototype of tesla .. tesla ----> genericCar


console.log(`tesla:`, tesla)
console.log(`tesla`, Object.getPrototypeOf(tesla));