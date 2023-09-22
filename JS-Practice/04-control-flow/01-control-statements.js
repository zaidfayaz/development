// if-else
const temperature = 30;
if (temperature <= 30) {
    console.log("Temperature is normal");
}
else {
    console.log('Temperature is high');
}

//nested if else 
const balance = 0;

if ( balance >= 1000){
    console.log(`Account balance is maintained. Your balance is ${balance}`);
}else if ( balance < 1000){
    console.log(`Account balance is not maintained. Your balance is ${balance}`);
}else{
 
    console.log(`Account balance is zero. Your balance is ${balance}`);
}