const prompt = require("prompt-sync")();


//Labels for break/continue;;

// let arr =[];
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     arr.push(input)

//     // what if we want to exit from here to Done (below)?
//   }
// }
// console.log(arr);


// break after input would only break the inner loop. 

outer: for(let i =0; i<5; i++){
    for(let j = 0; j<3; j++){
        let input = prompt(`value at coders(${i},${j})`,'');
        /// always remember prompt will return string , thats why loog is not ending when input =0 ; because its an non empty string
        if(!input) break outer; // it will end the outer loop also.

        input = +input; // converting into integer;

    }

}
console.log('done!!');