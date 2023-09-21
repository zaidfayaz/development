const user = {
    userName : "Zaid Fayaz",
    course : "JS",
    price : 999,

    welcomeMessage : function(){
        console.log(`Hello , Welcome Mr. ${this.userName}`);
       //  console.log(this); //here this refers to current context
    }
}
console.log(user.welcomeMessage());
user.userName = "Zaid Shawl";
console.log(user.welcomeMessage());
console.log(this); //here this refers to empty object

function thisKeyword(){
    // console.log(this); //outpu : contains lots of methods
    const ussrName = " Zaid Fayaz"
    console.log(this.userName); //output undefined 
}
thisKeyword()

// syntax of arrow funcion : () => {}

// explicit return
const addNum = (num1, num2) =>{
    return num1 + num2

}
console.log(addNum(4,6))

// implicit return
//ex 1

const addNum1 = (num1, num2) => num1 + num2
 
console.log(addNum1(4,4))

///ex. 2

const addNum2 = (num1, num2) => (num1 + num2)

console.log(addNum2(3,6))

//ex. 3
const objectreturn = () => ({userName : "Zaid Fayaz"})
console.log(objectreturn())


