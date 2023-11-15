/*Write a program to print the fibonacci series */
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for (let i = 0; i <= 10; i++) {
    let temp = num1 + num2  //0+1 = 1 =>temp
    console.log(temp);
    num1 = num2; //1: 1=1, 2: 1=1, 3: 2=2 so on.....
    num2 = temp  // 1: 1=1, 2: 2=2, 3: 3=3 so on....
}
