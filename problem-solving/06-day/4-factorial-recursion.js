let fact = 1;
const factorialRecursion =(num) =>{
    if (num > num){
        return `The factorial of ${num} is 1`
    }
    fact = fact * num;
    console.log(fact);
    fact++;
    factorialRecursion()
}


console.log(factorialRecursion(5));