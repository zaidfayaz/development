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

//nested scope
function one(){
    const userName ="Zaid Fayaz";

    function two(){
        const website = "Google";
        console.log(`calling outer function variable: ${userName}`);  //varaibles of parent function can be accessed
    }
   // console.log(`calling inner fuction two  variable : ${website}`); //it will show error coz its out from its outside from its scope
    two()
}
one()

//********************************exampple 2 *************************************** */
if (true){
    const userName =" Zaid Fayaz";
    if (userName === " Zaid Fayaz"){
        const website = " Google";
        console.log(userName + website);
    }
   // console.log(website); //eroor: accessed outside its scope
}
// console.log(userName) //error : accessed outside its scope

//************************** function hoisiting ******************************************

console.log(add1(6));

function add1( num){
    return num + 1;
}

//function expression
// console.log(add2(8));  //will provide error 

const add2 = function(num){
    return num + 1;
}


