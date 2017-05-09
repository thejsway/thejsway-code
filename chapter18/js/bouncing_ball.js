/*
Bouncing ball
*/

const frameElement = document.getElementById("frame");
const ballElement = document.getElementById("ball");
// Movement value in pixels
const movement = 7;
// Convert ball diameter (value of the form "XXpx") to a number
const ballDiameter = parseFloat(getComputedStyle(ballElement).width);
// Animation ID - Global variable to access it from functions
let animationId = null;
// Minimal left position (left border)
const xMin = 0;
// Direction info - 1=right, 2=left
let direction = 1;

// Déplace le ballElement vers la gauche ou la droite
const animateBall = () => {
  // Convert the left position of the ball (value of the form "XXpx") to a number
  const xBall = parseFloat(getComputedStyle(ballElement).left);
  // Convert the width of the frame (value of the form "XXpx") to a number
  const xMax = parseFloat(getComputedStyle(frameElement).width);
  // If the ball is at an adge of the frame
  if (xBall + ballDiameter > xMax || xBall < xMin) {
    // Change direction
    direction *= -1;
  }
  // Move the ball in the current direction
  ballElement.style.left = `${xBall + movement * direction}px`;
  // Request another animation
  animationId = requestAnimationFrame(animateBall);
};

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", () => {
  // Change button states
  startButton.disabled = true;
  stopButton.disabled = false;
  // Start the animation
  animationId = requestAnimationFrame(animateBall);
});

stopButton.addEventListener("click", () => {
  // Change button states
  startButton.disabled = false;
  stopButton.disabled = true;
  // Stop animation
  cancelAnimationFrame(animationId);
});
