/*write a program to find the factor of a number */
const factorNumber = (num)=>{
    console.log(`The factors of ${num} are:`);
    for (let i = 0; i <= num; i++){
        //console.log(i);
        if(num%i == 0){
          
            console.log(`${i}`);
        }
    }
}
factorNumber(12)