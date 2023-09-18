const myArr = [1, 3, 4, 56, 5];
console.log(myArr[2]);  //gives the element at particular index , remember index starts from zero

const myFriends = ['iqtida', 'haseeb', 'raqib', 'suhaib', 'yasir']
console.log(myFriends);

// Array Methods
const arr = [1, 9, 4, 5, 11];
//push , pop
arr.push(8); //inserts the elemenmt at the end
console.log(arr);
arr.pop() //removes the last element
console.log(arr);

//shift , unshift
arr.unshift(10); //inserts element at the beginning
console.log(arr);
arr.shift(); //removes element from start
console.log(arr);

//includes, indexOF, join
console.log(arr.includes(9)); //checks the element is present or not
console.log(arr.indexOf(9)); //givess the index of the element

const myNewArr = arr.join();
console.log(arr);
console.log(myNewArr); //it joins and changes the type of array into string

//sloce , splice
const array1 = [1,2,3,4,5]
console.log("A", array1);
const newArray1 =array1.slice(0,3); //3  index will be excluded
console.log(newArray1);
console.log("B", array1);


const newArray2 =array1.splice(0,3); //manipulates the original array
console.log("C", array1) 
console.log(newArray2);
