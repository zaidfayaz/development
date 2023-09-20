function myName(){
    console.log('Z');
    console.log('A');
    console.log('I');
    console.log('D');
}
myName()  //here myName is reference and  () is execution


function sum(num1, num2){
    console.log(num1 + num2)
    
}

const result = sum(3,5)
console.log("Result : " + result); //output undefined


function sum1(num1, num2){
   
    return num1 + num2;
}
const result2 = sum1(4,8)
console.log("Result : " + result2);

function userLogin(username){
    if (!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}
console.log(userLogin()); 
console.log(userLogin("Zaid"));

