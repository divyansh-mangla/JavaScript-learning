const prompt = require("prompt-sync")();



// while and for 
// similar to c++

// for(begin; condition; step){
//   ....loop body...
// }

let i =0;
for( ; i<3; i++){
    console.log(i);
};

let j = 0;
for(;j<100; ){
    console.log(j++);
}

// for(;;){ // repeats without limits

// }

// do/while atleast run 1 time 

let countDown = [];
let m = 0;
while(m<=100){
    countDown.push(m++);
}
console.log(countDown);

console.log(+"abx");
console.log(NaN);
console.log(!NaN);


let sum =0;
while(true) {
    
    let value = +prompt("Enter a number",''); // converts string into NaN or integer 
    if (!value) break; // if value == NaN then !NaN is true so the loop will break here only

    sum += value;
}
console.log(`sum: ${sum}`);