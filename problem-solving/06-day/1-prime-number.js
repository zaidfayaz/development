/*write a program to check whether the number is prime or not*/
/*Prime number is positive integer that is only divisible by 1 and itself */
const isPrime = (number) => {
    if (number == 1) {
        console.log(`${number} is neither  prime nor composite number`);
    } else if (number < 1) {
        console.log(`${number} is a negative number and it cant be a prime number`);
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return `${number} is not a prime number`;

            }
            return `${number} is a prime number`;
        }
    }
}
console.log(isPrime(25));
console.log(isPrime(26));
console.log(isPrime(47));