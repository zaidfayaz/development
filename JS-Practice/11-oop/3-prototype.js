let heroes = ["thor", "spiderman", "superman"]

let arrpower ={
  thor : "hammer",
  spiderman : "sling",
  superman : "vision",
  spiderPower : function (){
    console.log(`power of spiderman is ${this.spiderman}`);
  }
};
Object.prototype.zaid = function(){
    console.log("Zaid is present in all objects");  //zaid will be present in all the objects now
}
arrpower.zaid();
Array.prototype.heyZaid = function(){
    console.log("Zaid says hello");
}
heroes.heyZaid();
// arrpower.heyZaid(); //it will cause error //here it will be not present in the arr power becoz its acces is for the array only 

//inheritance 
const teacher ={
    makeVideo : true 
}
const TASupport= {
    available : false
}
Object.setPrototypeOf(TASupport, teacher);  //get the access of teacher object as well 