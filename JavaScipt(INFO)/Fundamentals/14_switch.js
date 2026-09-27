// the value of x is checked for a strict equality (===)

let a = 2+2;
switch(a){
    case 3:
        console.log('Too small');
    case 4:
        console.log('Exanctly!')
    case 5:
        console.log('Too big!');
    default:
        console.log("I don't know such values")
}
// because execution starts from case 4; and there is no break after it so it will execute the remaing also 
// to the nearest break 

// grouping of cases;

let b = 3;

switch(b){
    case 4:
        console.log('Right!');
        break;
    
    case 3:
    case 5:
        console.log('Wrong!');
        console.log("why don't you take a math class? ");
        break;
    
    default:
        console.log('The result is strange. Really.')
}


// quality check is always strict . the values must be of the same type to match 
// remeber the result of the prompt is a string 
// you can convert it with using +prompt('+' sign before prompt , or any variables)