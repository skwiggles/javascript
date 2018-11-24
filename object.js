// Set value for object using literal syntax
// 1st way: using literal syntax
// javascript object is like map in java, key-value pair can be changed after creation
let car = {make:'chevy'}  
car.model = 'cruze'  

// 2nd way: using constructor function
let car2 = new Object();  // its a function, not like a class in java
typeof car2  // object

// create custom constructor function
let Car = function(make, model) {
    // create a implicite object, use this to refer
    this.make = make;
    this.model = model;
}

let car3 = new Car('chevy', 'cruze')
typeof car3  // object


// javascript inheritance
// __proto__ is parent of every object
car.__proto__.hello = "world"  // warning!! this change applies to all objects
car.hello  // "world"
car2.hello  // "world"
let noncar = {}
noncar.hello  // "world"

// create custom parent 
var vehicle = {
    drive: function() {
        console.log("driving");
    },
    stop: function() {
        console.log("stopping");
    }
}

// assign parent to object
car.__proto__ = vehicle  // this change applies only to car instance, add one more layer
car.drive();  // driving
noncar.drive()  // ???

// prototype is a property of constructor function
console.dir(Car)
Car.prototype = vehicle
let car4 = new Car('chevy', 'cruze');
car4.drive()  // driving
// it does the following
// let car4 = {}
// car4.make = 'chevy'
// car4.model = 'cruze'
// car4.__proto__ = Car.prototype

Car.drive()  // error. prototype does not apply to its self, only works when using as constructor

Car.prototype.sayhi = 'hi'  // this change applies to all children
car4.sayhi  // hi

// 3rd way: using Object.create()
let car5 = Object.create()  // error, needs to provide a parent
let car5 = Object.create(vehicle)
// same as let car5 = new Car(), but no make and model

let car6 = Object.create(null)  // totally empty object