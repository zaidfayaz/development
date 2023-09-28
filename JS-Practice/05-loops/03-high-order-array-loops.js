//for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

const greetings = "Welcome Zaid";
for (const greet of greetings) {
    console.log(`The individual strings are : ${greet}`);
}

//maps 
const map = new Map(); //The Map object holds key-value pairs and remembers the original insertion order of the keys. 
map.set('SGR', "Srinagar");
map.set('GD', "Ganderbal");
map.set('BD', "Budgam");
map.set('Sp', "Sopore");
map.set('SGR', "Srinagar"); //its unique is maps collection so it wil ignore this duplicate key value pair

console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//for of loop doesnt work on objects