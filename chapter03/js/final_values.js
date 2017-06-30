/*
Guess the final values of variables
*/

// Temporary allow all variables to be defined with let
/* eslint prefer-const: "off" */

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
// 4 4 4 => 0 4 12
// 4 3 2 => 4 3 2
// 2 4 0 => 3 4 0
