// object literals Part-2
//singleton
const tinderUser = new Object();

tinderUser.id = "fdgj345";
tinderUser.email = "zaid@gmail.com";
tinderUser.isLoggedIn = false;

console.log((tinderUser));

const details ={
    email : "zaid@yahoo.com",
    fullDetails: {
        fullName: {
            firstName : "zaid",
            lastName : "fayaz"
        }
    }
}
console.log(details.fullDetails.fullName.firstName);

//combine objects
const obj1 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}
const obj2 = {
    4 : 'd',
    5 : 'e',
    6 : 'f'
}
const obj3 = Object.assign({}, obj1, obj2)  //{} is the target  and obj1 and obj2 are source
const obj4 ={...obj1, ...obj2} //another way of combining two objects and its mostly used one
console.log(obj3);
console.log(obj4);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//De structuring 
const course = {
    courseName : " JavaScript Fundamentals",
    price : 1999,
    courseInstructor : " Zaid Fayaz"
}
console.log(course.courseInstructor);

const  {courseInstructor} = course //de structuring means we dont have to  use dot operator again and again when we need to console the output we can use the name given in the curlybraces and directly log to console
console.log(courseInstructor); 

const  {courseInstructor : instructor} = course //if  we want to give property name aa we want then we can write as mentioned in this line of code
console.log(instructor);

//JSon talk 
json object
{
    "name" : "Zaid Fayaz",
    "course" : "javaScripe",
    "price" : "free"
}
// json array
// [
//     {},
//     {},
//     {}
// ]