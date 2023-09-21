// Immediately Invoked Function Expression (IIFE)
(function iife(){
     console.log("I am Immediately Invoked Function Expression ");
})();

( (name) => console.log(`DB connected ${name}`)
)("Zaid")
