//constructor funtion : its a reference to itself as well
function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings =  function(){
        console.log(`Welcome ${this.username}`);
    }
   // return this;
}
const userOne = new user("Zaid", 12, true) //new creates empty object called instance i.e constructor function is called by new keyword
const userTwo =  new user("Raqib", 10, false)
console.log(userOne.constructor); 
console.log(userTwo);
