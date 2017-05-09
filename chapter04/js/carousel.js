/*
Carousel turns
*/

const turnCount = Number(prompt("How many turns?"));

// Solution using a for
for (let turn = 1; turn <= turnCount; turn++) {
  console.log(`This is turn number ${turn}`);
}

// Alternative solution using a while
/* let turn = 1;
while (turn <= turnCount) {
  console.log(`This is turn number ${turn}`);
  turn++;
} */
