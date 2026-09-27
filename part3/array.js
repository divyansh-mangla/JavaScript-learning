let citiesVisited = ["Mumbai","Sydney"];
console.log(citiesVisited.findIndex(name=> name === 'Mumbai'));

citiesVisited.push("berlin");
console.log(citiesVisited);

let lastElement =  citiesVisited.pop();
console.log(lastElement);

// primitive data types are passed as a copy and array is passsed by the reference;
let cities = citiesVisited; // soft copy 
citiesVisited.pop();

console.log(citiesVisited);
console.log(cities)


citiesVisited.push("Tokyo","berlin","chicago");
console.log(citiesVisited);

// hard copy of an array
let hardCities = [...citiesVisited];
 ///let hardCities = citiesVisited.slice();
citiesVisited.pop();
console.log(hardCities);
console.log(citiesVisited);

// array merging or concatination
let europeanCities = ["Paris","Berlin","Rome"];
let asianCities = ["thailand","Delhi","Tokyo","bali"];
let worldCities = asianCities.concat(europeanCities);
console.log(worldCities);

// store the length of an array
let numberOfCities = worldCities.length;// its a property not a funciton so we dont need () at the end
console.log(numberOfCities);

// to found whether a city is included in the city or not 
let isBerlinInList = worldCities.includes("Berlin");// return true or false
console.log(isBerlinInList);