/* Write a js program to get a extension of a file name */
const getFileName = (str) => str.slice(str.lastIndexOf('.'))
console.log(getFileName("style.html"));
console.log(getFileName("style.js"));
console.log(getFileName("style.cascade.css"));