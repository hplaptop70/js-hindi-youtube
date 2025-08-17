//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Aman"

    function two(){
        const website = " youtube"
        console.log(username);
    }
    two()
    // console.log(website);
    
}
one()

if (true) {
    const username = "Aman"
    if (username === "Aman") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username + website);


//++++++++++++++++++++ Intresting ++++++++++++++++++++

//agar function ko is trha se define kara h to function ko initilize karne ke baad console ko khi bhi likh sakte h chahe function initilize ke pehle ya baad main.
console.log(addOne(5))

function addOne(num){
    return num+1
}

//agar function ko is tarha define kara h to function ko initilize karne ke baad hi console ko lagayenge agar function initilize ke pehle show kara to error show karega .
console.log(addTwo(5));

const addTwo = function(num){
    return num+2
}


