//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

console.log(myDate.toISOString());

let myCreatedDate01 = new Date(2025 , 0 , 15)
let myCreatedDate02 = new Date(2025 , 0 , 15 , 3 , 54)
let myCreatedDate03 = new Date("2025-08-15")
let myCreatedDate04 = new Date("08-15-2025")
console.log(myCreatedDate01.toLocaleString());
console.log(myCreatedDate02.toLocaleString());
console.log(myCreatedDate03.toLocaleString());
console.log(myCreatedDate04.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate01.getTime());
console.log(myCreatedDate02.getTime());
console.log(myCreatedDate03.getTime());
console.log(myCreatedDate04.getTime());
console.log(Math.floor(Date.now()/1000));   


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getMilliseconds());


