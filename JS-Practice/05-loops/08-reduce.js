//reduce
const myNum = [1, 2, 3, 4, 5]
const totalSum = myNum.reduce(function (accumulator, currentValue) {
    console.log(`Accumulator : ${accumulator}, Current Value : ${currentValue}`);
    return accumulator + currentValue
}, 0) //here 0 is the initial value which accumulator takes aa the beginning value
console.log(totalSum);

//now by arrow function
const arrSum = myNum.reduce( (acc, curVal) =>  acc + curVal,0 )
console.log(arrSum);

//example 2
const shoppingCart = [ 
    {
        itemName : " JS Course",
        price : 1999
    },
    {
        itemName : " Java Course",
        price : 4999
    },
    {
        itemName : " Pyhton Course",
        price : 999
    },
]

const returnSum = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(returnSum);