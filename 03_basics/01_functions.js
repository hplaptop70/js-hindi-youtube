
function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumber(number1,number2){
//     return number1 + number2
// }

function addTwoNumber(number1,number2){
    let result= number1 + number2
    return result
}


// const result = (addTwoNumber(3,5))

// console.log("Result : " , result);

// console.log("Result : " , addTwoNumber(3,5));

// function loginUserMessage (username = "Sam"){
//     if(username === undefined){
//       console.log("Please enter a username");
//       return
//     }
//     return `${username} just logged in`
// }
function loginUserMessage (username = "Sam"){
    if(!username){
      console.log("Please enter a username");
      return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

// console.log(loginUserMessage("Aman"));


// function calculateCartPrice(num1){
//     return num1
// }

function calculateCartPrice(...num1){
    return num1
}

// function calculateCartPrice(val1 , val2 , ...num1){
//     return num1
// }

// console.log(calculateCartPrice(100 , 200 , 600 , 500));


// const user = {
//     username : "Samad",
//     price : 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)

handleObject({
    username : "Aman",
    price : 399
})

const newArray = [200,500,600,300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArray));

console.log(returnSecondValue([200,500,600,300]));
