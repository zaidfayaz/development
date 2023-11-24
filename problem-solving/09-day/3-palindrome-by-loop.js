/*Write a program to check the palindrome using Loop */
const palindrome = (str)=>{
    let len = str.length
    let msg = "t as a palindrome"
    for(let i = 0; i < len/2; i++){
        if(str[i] != str[len - 1 - i]){
            console.log("number is palindrome");
        }
    }
    console.log(`${str} : ${msg}`);

}
palindrome("madam")