const promise1 = new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
});
promise1.then(function(){
    console.log("Promise Consumed");
})
//2nd way of using promise'
new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log('Async-2 task is completed');
    resolve()
  },1000);
}).then(()=>{
    console.log("Promise-2 Consumed");
})

const promise3 = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve({username : 'Zaid Fayaz', email : 'zaidfayaz1@gmail.com'})
        
    },1000);
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : 'Zaid Fayaz', password : 'Z1234a'})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})
promise4.then((user) =>{
  console.log(user);
  return user.username
}).catch()