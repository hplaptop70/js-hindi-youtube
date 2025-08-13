//primitive 

// 7types : String , Boolean , Number , Null , Undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id===anotherId)

const bigNumber = 3564845212369897426n



//Reference(Non Primitive)
// Object, Array, Function

const heros = ["Shaktiman" , "Chota Bheem" , "Balveer"];

let myIntro = {
    name: "Aman",
    age: 20,
}

// console.log(myIntro)
// console.log(heros)


const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof bigNumber);
