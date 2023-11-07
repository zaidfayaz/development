let number = 5
let fact = 1;
 function factorialRecursion(n){
    if (n > number){
        return
    }
    fact = fact * n;
    console.log(fact);
    n++;
    factorialRecursion(n);
}

factorialRecursion(5);
console.log(`${number} is ${fact}`);