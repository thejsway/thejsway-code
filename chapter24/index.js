/*
Package entry point
*/

// Load the module "greetings.js"
const greetings = require("./greetings.js");

// Use exported functions
console.log(greetings.sayHello("Baptiste")); // "Hello, Baptiste."
console.log(greetings.flatter()); // "Look how gorgeous you are today!"
// console.log(greetings.sayGoodbye("Baptiste")); // Error: sayGoodbye is not exported

const calculator = require("./calculator.js");

// Create an object by calling the exported function of this module
const calc = calculator();

// Use the object's methods
console.log(`2 + 3 = ${calc.add(2, 3)}`);

// Notice the first uppercase letter, since User is a class
const User = require("./user.js");

// Create an object from this class
const johnDoe = new User("John", "Doe");

// Use the created object
console.log(johnDoe.describe());

// Load the semver package as a module
const semver = require("semver");

// Check if specific versions satisfy a range
console.log(semver.satisfies("2.19.0", "^2.18.1")); // true
console.log(semver.satisfies("3.0.0", "^2.18.5")); // false

const circle = require("./circle.js");

// Use the exported functions
const radius = 3;
console.log(
  `The circumference of a circle of radius ${radius} is ${circle.circumference(
    radius
  )}`
);
console.log(`Its area is ${circle.area(radius)}`);

const Account = require("./accounting.js");

// Create object from the exported class
const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());

// Load the moment package as a module
const moment = require("moment");

// Format the current date
console.log(moment().format("dddd, MMMM Do YYYY"));

// COmpute the number of years since the specified date
console.log(moment("1976-11-26").fromNow());
