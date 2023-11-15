/*Write a program to check  if the number have the same last digit*/
function checkLastDigit(num1, num2, num3){
    let res1 = num1 % 10;
    let res2 = num2 % 10;
    let res3 = num3 % 10;

    if(res1 === res2 && res1 === res3)
    {
        console.log(`${num1}, ${num2}, ${num3} are having the same last digits`);
    }else{
        console.log(`${num1}, ${num2}, ${num3} are not having the same last digits`);
    }
}
checkLastDigit(11, 21, 101);
checkLastDigit(23, 45, 56);
checkLastDigit(234332432, 657574532, 43356532);
