/*Write a JS program to check two numbers  and return true if one of the number is 100  or if the sum of two numbers is 100 */
function checkNumber(num1, num2){
    if (num1 === 100 || num2 === 100){
        return true
    }else if (num1 + num2 === 100){
        return true
    }
    else{
        return false
    }
}
console.log(checkNumber(30, 70))

//using same problem by arrow function
