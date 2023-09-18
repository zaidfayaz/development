// ****************************numbers***********************************

const score = 200;
const balance = new Number(100); //explicity giving the number data type
console.log(score, balance);
console.log(balance.toString());  //converts the number into string type
console.log(balance.toFixed(3));  //inserts the three zeros after decimal

let precisionNumber = 2444.469
console.log(precisionNumber.toPrecision(4));

const hundreds = 100000;
console.log(hundreds.toLocaleString()); //gives the commas in number acc to amercan standard by default
console.log(hundreds.toLocaleString('en-IN')); //gives the comma as per indian standard

// ********************************Maths***********************************
console.log(Math);
console.log(Math.abs(-10)); //converts negative intp positive value
console.log(Math.round(6.6)); //it round off the  number and eliminate the decimal points 
console.log(Math.ceil(4.1));  // it will gives us the upper value if there is any decimail point e.g 4.1 will be 5 here
console.log(Math.floor(4.9));  // it will gives us the lower value if there is any decimail point e.g 4.9 will be 4 here

console.log(Math.min(3,6,8,1));
console.log(Math.max(3,6,8,1));

console.log(Math.random()) //generates any random no. btw 0 and 1
console.log((Math.random() * 10) + 1); //here +1 avoids giving the number zero
console.log(Math.floor(Math.random() * 10) + 1); //elimates the floating points 

const min = 10;
const max = 20;
 console.log(Math.floor(Math.random() * (max - min + 1)) + min); //generates the number in range btw 10 to 20
