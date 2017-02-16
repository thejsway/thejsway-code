/*
Circumference and area of a circle
*/

// Return the circumference of a circle
const circumference = radius => 2 * radius * Math.PI;
// Alternative solution using a function declaration
/*function circumference(radius) {
    return 2 * radius * Math.PI;
}*/

// Return the area of a circle
const area = radius => Math.pow(radius, 2) * Math.PI;
// Alternative solution using a function declaration
/*function area(radius) {
    return Math.pow(radius, 2) * Math.PI;
}*/

const r = Number(prompt("Enter the circle radius:"));
console.log(`Its circumference is ${circumference(r)}`);
console.log(`Its area is ${area(r)}`);
