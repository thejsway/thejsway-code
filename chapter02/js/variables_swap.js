/*
Swap two variables
*/

let number1 = 5;
let number2 = 3;

// classic solution: using a temporary variable
const temp = number1;
number1 = number2;
number2 = temp;
// alternative solution (only works with numbers)
/* number1 += number2;
number2 = number1 - number2;
number1 -= number2; */

console.log(number1); // 3
console.log(number2); // 5
