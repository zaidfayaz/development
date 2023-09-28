const programming = ["JS", "Py", "C++", "Ruby"];
programming.forEach( function (item) {
    console.log(item);
});

//another way is using by arrow function
programming.forEach( (item) => {
    console.log(item);
})

//for each has 3 parameters
programming.forEach((item, index, arr) =>{
    console.log(index, item, arr );
})

//accesing the items in array of objects
const myCoding = [
    {
        Language : "JavaScript",
        ShortHand : "Js"
    },
    {
        Language : "Java",
        ShortHand : "Java"
    },
    {
        Language : "Pyhton",
        ShortHand : "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.Language);
})