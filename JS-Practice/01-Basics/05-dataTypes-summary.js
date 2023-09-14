// data types : represents how data is represented in the menory. these are of two types
//  1 primitive data types
//7 types : string, number, boolean null , undefined, symbol, bigInt
const score = 34;
const scoreValue = 23.5;

const isLoggedIn = true;
let temp = null;
let userEmail;

const id = Symbol("321");
const anotherId = Symbol("321");
console.log(id == anotherId);

const bigNumber = 5454868734566n;




//2 non-primitive / reference type : 
// 3 types : array, object, functions
const arr = ["zaid", "babar", "faizan", 'suhaib'];

const person = {
    firstName :  "Zaid",
    age : 26
}

const myFunction =function() {
    console.log("hello world");

}
