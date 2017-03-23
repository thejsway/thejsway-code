/*
Count elements
*/

function countElements(selector) {
    return document.querySelectorAll(selector).length;
}

console.log(countElements("p"));              // Should show 4
console.log(countElements(".adjective"));     // Should show 3
console.log(countElements("p .adjective"));   // Should show 3
console.log(countElements("p > .adjective")); // Should show 2