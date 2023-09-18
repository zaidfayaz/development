let myDate = new Date();
console.log(myDate.toString()); //shows indian standard day , date and time
console.log(myDate.toDateString()); //shows day and  date 
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); //shows date omly
console.log(myDate.toLocaleString());  //shoes date with time
console.log(typeof myDate);

//create date manually
let myCustomDate = new Date(2023, 1, 25); //here 2023 is year, 1 is month but remember month starts from 0, 25 is day 
console.log(myCustomDate.toDateString());
let myCustomDat2 = new Date(2023, 1, 25, 4, 10, 4); //here 2023 is year, 1 is month but remember month starts from 0, 25 is day, 2 is hour, 10 is mins, 4 is seconds
console.log(myCustomDat2.toLocaleString());

let myCustomDat3 = new Date("2023-01-12"); // yy/mm/dd format
console.log(myCustomDat3.toLocaleString());

let myCustomDat4 = new Date("01-14-2023") //mm/dd/yy format
console.log(myCustomDat4.toLocaleString());

//time stamp
let myTimeStamp = Date.now()
console.log(myTimeStamp); //output will be in miliseconds

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());