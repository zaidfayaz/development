// object literals Part-1
const mySymbol = Symbol("key");
const user ={
    firstName : "zaid ",
    "lastName" : 'fayaz',
   mySymbol : " key1",
    [mySymbol] : " key1",
    age : 10,
    email : "zaidfayaz@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday", "Friday"]
}
console.log(user.firstName);
console.log(user.lasttName); //it will show undefiend
 console.log(user["lastName"]); //solution for above undefined type is to use brackets
 console.log(typeof user.mySymbol); //it will be string type rather than symbol
 console.log(user[mySymbol]); //answer to above problem

 user.age = 26  //changes the vlaue of age 
 //Object.freeze(user) //now no changes will happen further in the object properties
 console.log(user);

 user.greeting = function(){
    console.log("hello user");
 }
 user.greeting2 = function(){
    console.log(`hello ${this.firstName}`);
 }
 console.log(user.greeting());
 console.log(user.greeting2());
