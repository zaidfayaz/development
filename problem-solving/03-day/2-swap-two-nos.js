/*Write  a js program to swap two numbers by using temp varaible*/ 

function swap(num1, num2){
    var temp;
    console.log(`Before swapping : The value of num1 = ${num1} and the value of num2 = ${num2}`);
    temp = num1; 
    num1 = num2;
    num2 = temp
    console.log(`After Swapping : the value of num1 = ${num1} and the value of num2 = ${num2}`);
}
swap(2,4);

/*Write  a js program to swap two numbers without using temp varaible*/
const swapNumbers = (num1, num2) => {
    console.log(`Before swapping : The value of num1 = ${num1} and the value of num2 = ${num2}`);
    num1 = num1 + num2   //output : num1 became 14 i.e  5 + 9 = 14
    num2 = num1 - num2    //output : here num1 is 14,  num2 became 5 i.e 14 - 9 = 5
    num1 = num1 - num2  //output here num1 is 14, i.e 14 - 5 = 9   and num1 became 2
    console.log(`After swapping : The value of num1 = ${num1} and the value of num2 = ${num2}`);
}
swapNumbers(5,9)
swapNumbers(15, 76)