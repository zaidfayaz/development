const accountId = 23454;
let accountName = "Zaid Fayaz";
var accountGmail = "zaid@gmail.com"; //prefer not to use becoz of block scope and functional scope
accountCity = "Srinagar";  //never use this type syntax
let accountState;

// updating the values 
// accountId = 442433; //cant be changed because compiler wont allow to change the const value
accountName = "Zaid Shawl";
accountGmail = "zaidfayaz@gmail.com";

console.table ([accountId, accountName, accountGmail, accountCity, accountState]);
