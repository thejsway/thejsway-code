/*
Squaring a number
*/

// Square the given number x
function square1(x) {
  return x * x; // Or: Math.pow(x,2);
}

// Square the given number x
const square2 = x => x * x; // Or: Math.pow(x,2);
// Less concise solution with function body
/* const square2 = x => {
  return x * x;
}; */

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

for (let i = 0; i <= 10; i++) {
  console.log(square1(i));
}
