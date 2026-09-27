let addition = 4+5

let score = 56
let bonus = 34

let totalScore = score + bonus 
let subtract =9 -3 


//"=" assignment operator 
//

console.log(4 ** (1/2));

// string concatenation with binary + 
    let s = "my" + "string";
    console.log(s);

    console.log('1'+2);// "12"
    console.log(2+'1');// "21"
    console.log(4 +"abc"+ 4+ "1"+3);//4abc13
    console.log("2"+1+6);// 216 not 27
    console.log(1+6+"2");// 72 not 162
    
/*
The binary + is the only operator that supports strings in such a way. Other arithmetic
 operators work only with numbers and always convert their operands to numbers.
 */
console.log(6-"2")// 4


// unary pluses converts data type to numbers
console.log(+true)// 1
console.log(+"")// 0
// do the same thing as Number(....) but in a shorter way
console.log(-true); // first it converts true into a number than opposite it;

let a = 5;
console.log(a++); // will print a = 5
// ++conunter (prefix) return the new value ; 1st perform the operation of counter = counter + 1
// counter-- (postfix) return the old value; and then make counter = counter +1;

let b = 7;
console.log(++b);