//for each loop doesn't return anything
//filter : The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const returnNums = myNums.filter((num) => num > 4)
console.log(returnNums);

//same can be done by for each as shown below

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const returnNum = [];
myNum.forEach((num) => {
    if (num > 4) {
        returnNum.push(num)
    }
})
console.log(returnNum);

const books = [
    {
        title: 'Book-1', genre: 'Science', publish: 1999, edition: 2014
    },
    {
        title: 'Book-2', genre: 'Fiction', publish: 1987, edition: 2015
    },
    {
        title: 'Book-3', genre: 'History', publish: 2009, edition: 2017
    },
    {
        title: 'Book-4', genre: 'Science', publish: 2009, edition: 2017
    },
    {
        title: 'Book-5', genre: 'Non-Fiction', publish: 1997, edition: 2019
    },
    {
        title: 'Book-6', genre: 'English', publish: 2009, edition: 2017
    }
]
let userBooks = books.filter((bk) => bk.genre === 'Science');
userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})
console.log(userBooks);