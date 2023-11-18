/*Write to program to chech the armstrong numbers between an interval */
function armstrong(num1, num2){
    for (let i = 0; i<= num2; i++){
        //console.log(i);
        let temp = i;
        let noOfDigits = i.toString().length;
        let sum = 0;
        while(temp > 0){
            let digit = temp % 10;
            temp = parseInt(temp/10);
            sum += digit ** noOfDigits;
        }
        if(sum == i){
            console.log(i);
        }
    }

}
armstrong(1, 1000)
armstrong(1, 2000)