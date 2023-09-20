var c =10; //global scope
 
if (true){
    let a = 10; //block scope and can be used only in this scope..outside it cant be accessed
    const b = 20; //block scope and can be used only in this scope..outside it cant be accessed
   // var c = 15;  it has a function/global scope and it is the reason scooping came into existence 
    console.log("Inner :" + a, b, c);
}
let a = 13;
const b = 25;
var c // here c = 10 as declared above (by hoisting)
console.log("outer :" + a, b, c);
console.log("hello");