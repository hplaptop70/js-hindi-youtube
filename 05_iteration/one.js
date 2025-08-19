//for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element=i
   if (element ==5) {
    // console.log("5 is the best number");
    
   }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value is : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value is ${j} and outer loop value ${i} `);
        
        // console.log(i + '*' + j + '=' +i*j);
        
    }
}

const myArray = ["flash" , "superman" , "batman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//break and continue

// for (let i = 0; i <=10; i++) {
//     if (i ==5) {
//         console.log("Detected 5");
//         break
//     }
//         console.log(i);
        
//     }
for (let i = 0; i <=10; i++) {
    if (i ==5) {
        console.log("Detected 5");
        continue
    }
        console.log(i);
        
    }
    
