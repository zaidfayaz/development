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


function cartItemsPrice(...num){ //spread operator :we can pass n no. of arguments(value) without giving the n no. of parameters
    return num

}
console.log(cartItemsPrice(200, 3000 , 40000 , ));

//passing object in the function
const user = {
    name : "Zaid Fayaz",
    course : "Web Development",
    price : 4999

}
function handleObject(anyobject){
    console.log(`The course ${anyobject.course} is teached by ${anyobject.name} @ ${anyobject.price} only`)

}
handleObject(user)  //pass the object name here
//we can directly pass the object as well
handleObject({
    name : "Zaid Shawl",
    course : "JavaScript",
    price : 999

}) 

//passing array in the function
const myArr = [200, 400, 500, 300];

function arrayHandler(getArray){
    return getArray[2]
}
console.log(arrayHandler(myArr));
console.log(arrayHandler([200,100,400,600])); //we can also directly pass the array as well



