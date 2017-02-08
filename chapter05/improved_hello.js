/* 
Say hello to the user
*/

// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}
// Alternative solution using an arrow function
// const sayHello = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;

const fn = prompt("Enter your first name:");
const ln = prompt("Enter your last name:");
alert(sayHello(p, n));