//Singleton
//Object.create 


//Object literls

const mySym = Symbol("key1")

const JSUser = {
    name : "Aman",
    "full name" : "Aman Saifi",
    [mySym] : "myKey1",
    age : 18,
    location : "Uttar Pardesh",
    email : "aman@google.com",
    IsLoggedIn : true,
    LastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JSUser);

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);



// JSUser.email = "aman@chatgpt.com"
// Object.freeze(JSUser)
// JSUser.email = "aman@microsoft.com"
// console.log(JSUser)


JSUser.greeting = function(){
    console.log("Hello JS User");
    
} 
JSUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this["full name"]}`);
    
}
console.log(JSUser.greeting())
console.log(JSUser.greetingTwo())