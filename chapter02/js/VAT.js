/*
Calculate VAT and final price
*/

const rawPrice = Number(prompt("Enter the raw price:"));
// VAT rate = 20.6%
const vatRate = 20.6 / 100;
const finalPrice = rawPrice * (1 + vatRate);
console.log(`The final price is ${finalPrice}`);
