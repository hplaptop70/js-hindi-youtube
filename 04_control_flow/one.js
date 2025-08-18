//if

// const userLoggedIn = true
// const tempreture = 30

// if (tempreture==30) {
//     console.log("tempreture is under control");
    
// }else {
//     console.log("tempreture is not under control");
    
// }

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score>100) {
//     let power = "fly"
//     console.log(`userPower: ${power}`);
    
// }
 // console.log(`userPower: ${power}`);


//  const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");//is tarha se kabhi bhi code nahi likhna h.

// if (balance<500) {
//     console.log("less than 500");
    
// }else if (balance<750) {
//     console.log("less than 750");
    
// }else if (balance<900) {
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const userLoggedFromEmail = false
const userLoggedFromGoogle = true

if (userLoggedIn && debitCard) {
    console.log("Allow For Purchase a Course");
    
}

if (userLoggedFromEmail || userLoggedFromGoogle) {
    console.log("Allow For Enter Our Website");
    
}
