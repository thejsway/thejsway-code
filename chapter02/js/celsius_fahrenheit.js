/*
Convert a temperature from Celsius to Fahrenheit degrees
*/

const tempCel = Number(prompt("Enter a temperature in Celsius degrees:"));
const tempFar = tempCel * 9 / 5 + 32;
console.log(`${tempCel}°C = ${tempFar}°F`);
