// Show the pressed key
document.addEventListener("keyup", (e) => {
  console.log(`You pressed the ${e.key} key`);
});

// Show information on a keyboard event
const keyboardInfo = (e) => {
  console.log(`Keyboard event: ${e.type}, key: ${e.keyCode}`);
};

// Integrate this function into key press and release:
document.addEventListener("keydown", keyboardInfo);
document.addEventListener("keyup", keyboardInfo);
