class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }
    static createID(){  // the this function cant be accessed by any child class or any object (usecase " creating unique ids")
        console.log("1234");
    }
}
const userObject = new user("Zaid Fayaz")
userObject.logMe()
// userObject.createID()  //TypeError: userObject.createID is not a function
