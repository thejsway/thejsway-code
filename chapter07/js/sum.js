/*
Sum of values
*/

let sum = 0;

// Solution using a for-of loop
for (const value of values) {
  sum += value;
}

// Solution using a forEach method
/*values.forEach(value => {
  sum += value;
});*/

console.log(sum);