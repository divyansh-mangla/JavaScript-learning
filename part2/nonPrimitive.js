const username = {
    firstname: "divyansh",
    isLoggedin: true
};


username.firstname = "Mr.divyansh"
username.lastname ="mangla"
console.log(username)
console.log(username['firstname'])
console.log(username.firstname);
console.log(username.lastname);
console.log(typeof username);


let today = Date(); 
console.log(typeof today) // string , and we can't use in-build method of Date() 

let isToday = new Date();
console.log(typeof isToday) // object 
console.log(isToday)

let anotherUser = ['divyansh', true];

console.log(anotherUser[0]);

 