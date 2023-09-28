//for each loop doesn't return anything
//filter : The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const returnNums = myNums.filter( (num) => num > 4)
console.log(returnNums);

//same can be done by for each as shown below

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const returnNum = [];
myNum.forEach( (num) => {
    if( num > 4 ){
        returnNum.push(num)
    }
  })
console.log(returnNum);
 