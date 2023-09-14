let name = "Zaid";
let age = 26;

console.log(`My name is ${name} and i am ${age} years old`);

//string operations

let designation = "developer";
console.log(designation.__proto__); //gives the prototype of the string
console.log(designation.length); // gives the length of the string
console.log(designation.toUpperCase()); //converts string into uppper case
console.log(designation.charAt(3)); //specifies which char is at given index
console.log(designation.indexOf('l')) //specifies at which index the given char is

const newString = designation.substring(0, 4) // gives the string from 0 to 3 position, 4 is excluded
console.log(newString);

const strSlice =  designation.slice(-8,  4);
console.log(strSlice);

const strTrim = "    Trim Method    ";
console.log(strTrim);
console.log(strTrim.trim()); //removes white spaces

const url = "htttps://zaid.com/zaid%20fayaz";
console.log(url.replace('%20', '-')); //it replaces the alphabit or value with the new one

console.log(url.includes('zaid')); // it checks whether the gicen string is present or not

let strSplit = 'My-name-is-Zaid-Fayaz';
console.log(strSplit.split('-')); //The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.


