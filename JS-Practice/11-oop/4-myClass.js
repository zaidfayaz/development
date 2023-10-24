class user{
    constructor(username, email, password){
        this.username= username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}12abc`
    }
    capitalizeUsername(){
        return  `${this.username.toUpperCase()}`
    }
}
const userClass = new user("Zaid", "zaid@gmail.com", "ZAid1")
console.log(userClass.encryptPassword());
console.log(userClass.capitalizeUsername());

//behind the scenes if class was not there
function user1(username, email, password){
    this.username= username;
    this.email = email;
    this.password = password

}
user1.prototype.encryptPassword = function(){
    return `${this.password}12abc`
}
user1.prototype.capitalizeUsername = function(){
    return  `${this.username.toUpperCase()}`
}

const userClass1 = new user1("Zaid Fayaz", "zaid@gmail.com", "Fayaz1")
console.log(userClass1.encryptPassword());
console.log(userClass1.capitalizeUsername());