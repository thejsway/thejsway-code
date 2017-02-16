/* 
Minimum of two numbers
*/

// Return the minimum of two numbers
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// Alternative solution using an arrow function
/*const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}*/

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
