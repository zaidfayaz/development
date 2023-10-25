class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(email){
          this._email = email
    }
    get password(){
        return `${this._password}zaid`
    }
    set password(value){
         this._password = value;
    }
}
const userObject = new user("z@gmail.com", 123)
console.log(userObject.password);
console.log(userObject.email);