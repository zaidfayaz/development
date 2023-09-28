//for in 
const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    py : 'python'
}
 for (const key in myObject) {
   console.log(key, ': ', myObject[key]);
 }

 const programming = ["JS", "Py", "C++", "Ruby"]

 for (const key in programming) {  //the ley here are the index of array which starts from 0
   console.log(key, ':' , programming[key]);
 }
 