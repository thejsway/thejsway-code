/* 
Number comparison
*/

const number1 = Number(prompt("Enter number 1:"));
const number2 = Number(prompt("Enter number 2:"));

if (number1 < number2) {
    alert(`${number1} is less than ${number2}`);
} else if (number1 > number2) {
    alert(`${number1} is greater than ${number2}`);
} else {
    alert(`${number1} and ${number2} are equal`);
}