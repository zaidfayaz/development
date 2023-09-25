//for loop
 for (let index = 0; index <= 5; index++) {
    const element = index;
    console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("I love number 5");
    }
    console.log(element);
    
}

//loops inside loop
for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=5; j++) {
        console.log(`inner loop value: ${j} and outer loop value ${i}`);
        
    }
    
}

// multiplication table
for (let i = 1; i <=10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(i + "x" + j + "=" + i * j );
        
    }
    
}

//loop on array
let myArray = ["zaid", "faizan", "suhaib", "raqib"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue
for (let i = 0; i <= 20; i++) {
   if ( i == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`The value is ${i}`);
}

for (let i = 0; i <= 20; i++) {
    if ( i == 5){
         console.log("Detected 5");
         continue;
     }
     console.log(`The value is ${i}`);
 }
 
