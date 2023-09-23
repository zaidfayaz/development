// falsy values: false, 0, -0, bigint (0n),"", null, undefined, NaN
//truthy values : "0", 'false', ' '(space), {}, [], function(){}
const userEmail = " zaid@gmail.com";

if (userEmail){
    console.log("Got the user email");
}else{
    console.log("User Email required");
}

//check empty array
const emptyArray = [];
if (emptyArray.length === 0){
    console.log("I am empty array");
}

//check empty object
const emptyObject = {};
if (Object.keys(emptyObject).length === 0){
    console.log("I am empty object"); 
}
