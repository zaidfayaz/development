/*Write to program to chech the armstrong number */
function armstrongNumber(num){
    let temp = num
    let sum = 0;
    while(temp > 0){
        let digit = temp % 10
        sum += digit **3
        temp = parseInt(temp / 10)

    }
    if (sum == num){
        console.log(`${num} is a armstromg number`);
    }else{
        console.log(`${num} is not a armstrong number`);
    }

}
armstrongNumber(122)