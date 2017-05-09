/*
Say hello to the user
*/

// Say hello to the user
const sayHello = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;

// Alternative solution using a function declaration
/* function sayHello(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
} */

const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
console.log(sayHello(firstName, lastName));
