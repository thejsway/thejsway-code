// Load the module "greetings.js"
const greetings = require("./greetings.js");

// Use exported functions
console.log(greetings.sayHello("Baptiste")); // "Hello, Baptiste."
console.log(greetings.flatter()); // "Look how gorgeous you are today!"
// console.log(greetings.sayGoodbye("Baptiste")); // Error: sayGoodbye is not exported

// Load the module "calculator.js"
const calculator = require("./calculator.js");

// Create an object by calling the exported function of this module
const calc = calculator();

// Use the object's methods
console.log(`2 + 3 = ${calc.add(2, 3)}`);

// Load the module "user.js"
const User = require("./user.js");

// Create an object from this class
const johnDoe = new User("John", "Doe");

// Use the created object
console.log(johnDoe.describe());

const circle = require("./circle.js");

const radius = 3;
console.log(
  `The circumference of a circle of radius ${radius} is ${circle.circumference(
    radius
  )}`
);
console.log(`Its area is ${circle.area(radius)}`);

/* const fs = require("fs");

console.log("Before file read");
fs.readFile("poem.txt", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(`File content: ${data.toString()}`);
});
console.log("After file read"); */

const semver = require("semver");

console.log(semver.satisfies("2.21.3", "^2.18.5")); // true
console.log(semver.satisfies("3.1.2", "^2.18.5")); // false
