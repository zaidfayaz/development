console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 3);
console.log(2 != 3);

console.log("2" > 3);
console.log("02" > 3);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  //the reason is that an equality check == and comparisions < > >= <= work differently. comparisions convert null to a number, treating it as 0 . thats why null >=0 is true  and null > 0 is false

// ===
console.log( "2" == 2); //true
console.log( "2" === 2); //false becoz it compares value as well as data type