//constructor funtion
function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}
const userOne = new user("Zaid", 12, true) //new creates the multiplpe instances i.e constructor function
const userTwo =  new user("Raqib", 10, false)
console.log(userOne); 
