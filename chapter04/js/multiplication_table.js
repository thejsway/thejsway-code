/*
Multiplication table
*/

let number = 0; // Initial value set to enter the loop
while (number < 2 || number > 9) {
  number = Number(prompt("Enter a number between 2 and 9:"));
}

console.log(`Here's the multiplication table for ${number}`);

// Solution using a for
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Alternative solution using a while
/* let i = 1;
while (i <= 10) {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
} */
