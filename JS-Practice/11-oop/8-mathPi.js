const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI') //tells about the hidden things of the object
console.log(discriptor);

const course = {
    name : "JavaScript",
    price : 3999,
    isAvailable : true
  
}
console.log(course);
console.log(Object.getOwnPropertyDescriptor(course, "name"));

Object.defineProperty(course, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(course, "name"));

course.name = "C"
console.log(course);
loo
