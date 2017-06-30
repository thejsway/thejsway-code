/*
Updating colors
*/

const textColor = prompt("Enter the text color:");
const backgroundColor = prompt("Enter the background color:");

const divElements = Array.from(document.getElementsByTagName("div"));
divElements.forEach(divElement => {
  divElement.style.color = textColor;
  divElement.style.backgroundColor = backgroundColor;
});
