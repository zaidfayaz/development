//map 
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const newNum =myNum.map( (num) => num + 10 )
console.log(newNum);

//forEach
const arr = []
 myNum.forEach( (num) => {
    arr.push(num + 10)
 })
console.log(arr);

//chaining
const chaining = myNum.map( (num) => num * 10).map( (num) => num + 1 ).filter( (num) => num >= 40)
console.log(chaining);

console.log("hello");
console.log("Zaid");
console.log("zasd");