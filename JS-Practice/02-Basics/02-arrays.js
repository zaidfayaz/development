const friends = ["Suhaib", "Kaiser", "Faizan", "Raqib"]
const family = ["Haseeb", "Iqtida", "Hanan"];

friends.push(family); //it will take the family array as a single element in the single array
console.log(friends);
//console.log(friends[4][1]);  //gives the 2nd arrays 2nd element

const group = friends.concat(family);
//console.log(group);

const group2 = [...friends, ...family] //spread operator
console.log(group2);

const numArr = [1, 2, 3, [4, 5, 6], 7, 8, [, 3, 4, 6, [4, 5, 6]]];
const resultArr = numArr.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(resultArr);

console.log(Array.isArray("Zaid")); //check its array or not
console.log(Array.from("Zaid")); //converts it into the array

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.