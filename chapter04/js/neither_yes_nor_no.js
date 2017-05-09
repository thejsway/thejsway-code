/*
"Neither yes, nor no" game
*/

// Initial value set to enter the loop
let input = "";
while (input !== "yes" && input !== "no") {
  input = prompt('Do you want to play "Neither yes, nor no" with me?');
}
console.log("You just lost!");
