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
