/*
Calculator
*/

// Return calculation result
function calculate(leftNumber, operation, rightNumber) {
  let result;
  switch (operation) {
    case "+":
      result = leftNumber + rightNumber;
      break;
    case "-":
      result = leftNumber - rightNumber;
      break;
    case "*":
      result = leftNumber * rightNumber;
      break;
    case "/":
      result = leftNumber / rightNumber;
      break;
  }
  return result;
}

console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
