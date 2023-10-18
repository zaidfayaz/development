const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    }, 1000)
});
promise1.then(function () {
    console.log("Promise Consumed");
})
//2nd way of using promise'
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async-2 task is completed');
        resolve()
    }, 1000);
}).then(() => {
    console.log("Promise-2 Consumed");
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: 'Zaid Fayaz', email: 'zaidfayaz1@gmail.com' })

    }, 1000);
})
promise3.then(function (user) {
    console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'Zaid Fayaz', password: 'Z1234a' })
        } else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => console.log(username)).catch((error) => console.log(error)).finally(() => console.log("The promise was either rejected or resolved"))

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'JavaScript', password: 'Z1234a' })
        } else {
            reject('ERROR : Something went wrong in JS')
        }
    }, 1000)
})
async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromise5()
async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/zaidfayaz')
        // console.log(respone);
        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.log("Err", error);
    }
}
getAllUsers()

//Above  approac by thenable
fetch('https://api.github.com/users/zaidfayaz').then((response) => {
    return response.json()
}).then((data) => console.log(data)).catch((error) => console.log(error));