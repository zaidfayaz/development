let fact = 1
function factorial(num) {
    if (num == 0) {
        console.log(`The factorial of ${num} is 1`);
    } else {
        for (let i = 1; i <= num; i++) {
            fact = fact * i
        }
        console.log(`The factorial of ${num} is ${fact}`);
    }
}
factorial(0)