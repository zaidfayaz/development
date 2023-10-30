function outer(){
    let a = 10;

    function inner1(){
        let b = 20;
        console.log(`${a} and ${b}`);
    }
    function inner2(){
        let c = 30;
        console.log(`${a} and ${c}`);
    }
    inner1()
    inner2()
}
outer()
 console.log(10 + 6.9);