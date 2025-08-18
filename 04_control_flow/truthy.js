// const userEmail = "h@aman.ai"

// if (userEmail) {
//     console.log("User is used an Email");
    
// }else{console.log("User is not used an Email");
// }
const userEmail = []

if (userEmail) {
    console.log("User is used an Email");
    
}else{console.log("User is not used an Email");
}

//Falsy value 
// false, 0 , -0 , Bigint 0n , "" , null , undefined , NaN 

//Truthy Value 
// [] , " " , true , "0" , 'false' , {} , function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
    
// }

const empobject = {}

if (Object.keys(empobject).length===0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")