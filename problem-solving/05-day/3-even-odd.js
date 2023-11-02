/*Write a program to check whether the number is even or odd */
function evenOdd(number){
    if (number % 2 == 0){
        console.log(`${number} is even number`);
    }else{
        console.log(`${number} is odd number`);
    }
}
evenOdd(12)
evenOdd(23)
evenOdd(-23)

//same program by terinary operator
function oddEven(number){
    let result = number % 2 == 0 ? console.log(`${number} is even number`) :  console.log(`${number} is odd number`);
}