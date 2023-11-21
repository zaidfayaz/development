/*Write a program to find the  sum of natural numbers using recursion */
function naturalSum(num){
    if(num > 0){
        return num + naturalSum(num - 1)
        //output 5 + 4 + 3 + 2 + 1 + 0 = 15
    }else{
        return num;
    }
}
console.log(naturalSum(5));
