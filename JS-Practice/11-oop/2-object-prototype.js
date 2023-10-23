function multiply(num){
    return num * 5
}
console.log(multiply(5));
console.log(multiply.prototype);  //functions are functions and objects as well 

function createUser(username, score){
    this .username = username;
    this.score = score
} 
createUser.prototype.increment = function (){
    this.score ++;
}
createUser.prototype.printMe = function (){
    console.log(`Score is ${this.score}`);
}
//const user1 = createUser("zaid", 50)
// user1.printMe() // TypeError: Cannot read properties of undefined (reading 'printMe') becox we didnt told the function we have added the additional properties , so for that we  use the new keyword
const user1 = new createUser("zaid", 50)
const user2 = createUser("Raqib", 45)
user1.printMe()
