class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherObject = new teacher("Zaid", "zaid@gmail.com", 123)
teacherObject.addCourse()
teacherObject.logMe()

const userObject = new user("Zaid Fayaz")
// userObject.addCourse() //TypeError: userObject.addCourse is not a function cox it doesnt have access to add courese method
userObject.logMe()