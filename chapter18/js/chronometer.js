/*
Chronometer
*/

const buttonElement = document.querySelector("button");
const counterElement = document.getElementById("counter");
// Global variable to access it from function
let intervalId = null;
// Chronometer state, initially stopped
let started = false;

buttonElement.addEventListener("click", () => {
  if (!started) {
    // Start the chronometer: add 1 to the counter each second
    intervalId = setInterval(() => {
      counterElement.textContent = Number(counterElement.textContent) + 1;
    }, 1000);
    // Update button text
    buttonElement.textContent = "Stop";
  } else {
    // Stop the chronometer
    clearInterval(intervalId);
    // Update button text
    buttonElement.textContent = "Start";
  }
  // Change chronometer state
  started = !started;
});
