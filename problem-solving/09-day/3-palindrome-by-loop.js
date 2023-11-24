/*Write a program to check the palindrome using Loop */
const palindrome = (str)=>{
    let len = str.length
    let msg = "It is a Palindrome"
    for(let i = 0; i < len/2; i++){
        if(str[i] != str[len - 1 - i]){
            msg = 'It is not a Palindrome'
        }
    }
    console.log(`${str} : ${msg}`);

}
palindrome("racecar")