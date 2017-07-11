// Temporary allow unused variables
/* eslint no-unused-vars: "off" */

// Create three functions
const sayHello = name => `Hello, ${name}`;
const flatter = () => `Look how gorgeous you are today!`;
const sayGoodbye = name => `Goodbye, ${name}`;

// Export two of them
module.exports.sayHello = sayHello;
module.exports.flatter = flatter;
