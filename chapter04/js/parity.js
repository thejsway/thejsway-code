/*
Show even and odd numbers
*/

const number = Number(prompt("Enter the starting number:"));

// Solution using a for
for (let i = number; i < number + 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// Alternative solution using a while
/* let i = number;
while (i < number + 10) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
  i++;
} */
