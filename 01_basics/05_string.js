const name = "Aman"
const repoCount = 50

// console.log(name + repoCount  +  " value")


console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Aman-AS-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-11 , 4)
console.log(anotherString);



const newStringOne = "   Aman   "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://aman.com/aman%20saifi"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundur'));

console.log(gameName.split('-'));
