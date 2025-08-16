const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.email = "aman@google.com"
tinderUser.name = "Samad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "someone@google.com",
    fullName :{
        username :{
            firstName : "Abdul",
            lastName : "Samad"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.username.firstName);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3: "c" , 4 :"d"}
const obj4 = {5 : "e" , 6 : "f"}


// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1 , ...obj2 , ...obj4}
// console.log(obj3);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//Deformating is tarha ki jati h
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
//json type object or array -: vo array ya obbject jisko likhne ke liye ham koi bhi instruter use nahi karte h.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]