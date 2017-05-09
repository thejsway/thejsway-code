/*
Input validation
*/

// Initial value set to enter the loop
let number = 0;
while (number < 50 || number > 100) {
  number = Number(prompt("Enter a number between 50 and 100:"));
}
