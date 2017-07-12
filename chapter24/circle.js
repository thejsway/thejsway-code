/*
Circle module
*/

// Value of number π (private to the module)
const PI = Math.PI;

// Return the circumference of a circle
module.exports.circumference = radius => 2 * PI * radius;

// Return the area of a circle
module.exports.area = radius => PI * radius ** 2;
