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