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
 //Nullish coalescing operator(??) : Null , Undefined
  let val1;
  val1 = 5 ?? 15;
  let val2 = null ?? 15;
  let val3 = undefined ?? 90;
  console.log(val1, val2, val3);
 

//Terinary operator
const teaPrice = 100;
teaPrice <= 100 ? console.log(`Tea price : ${teaPrice}`) : console.log("Tea price not valid");

