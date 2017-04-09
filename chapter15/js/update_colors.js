/*
Updating colors
*/

const textColor = prompt("Enter the text color:");
const backgroundColor = prompt("Enter the background color:");

const divElements = document.getElementsByTagName("div");
for (const divElement of divElements) {
  divElement.style.color = textColor;
  divElement.style.backgroundColor = backgroundColor;
}
