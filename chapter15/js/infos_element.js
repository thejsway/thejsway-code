/*
Information about an element
*/

const styleElement = getComputedStyle(document.getElementById("content"));
const listElement = document.createElement("ul");
const heightElement = document.createElement("li");
heightElement.textContent = `Height : ${styleElement.height}`;
const widthElement = document.createElement("li");
widthElement.textContent = `Width: ${styleElement.width}`;
listElement.appendChild(heightElement);
listElement.appendChild(widthElement);
document
  .getElementById("infos")
  .appendChild(document.createTextNode("Information about the element"));
document.getElementById("infos").appendChild(listElement);
