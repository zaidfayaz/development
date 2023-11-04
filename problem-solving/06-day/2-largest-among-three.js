/*write a program to find largest among three numbers */
const largestNumber = (num1, num2, num3) =>{
    if (num1 > num2 && num1 > num3){
        console.log(`${num1} is largest`);
    }else if ( num2 > num1 && num2 > num3){
        console.log(`${num2} is largest`);
    }else{
        console.log(`${num3} is largest`);
    }

}
largestNumber(62, 55, 65)