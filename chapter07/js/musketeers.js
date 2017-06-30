/*
Musketeers
*/

// Temporary allow for-of loop
/* eslint no-restricted-syntax: "off" */

const musketeers = ["Athos", "Porthos", "Aramis"];

console.log("Here are the three musketeers:");
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");
console.log("Now there are four of them:");
musketeers.forEach(musketeer => {
  console.log(musketeer);
});

musketeers.splice(2, 1);
console.log("Poor Aramis has died!");
for (const musketeer of musketeers) {
  console.log(musketeer);
}
