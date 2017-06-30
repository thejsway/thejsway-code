/*
Changing colors
*/

document.addEventListener("keypress", e => {
  let key = String.fromCharCode(e.charCode); // Get the pressed key
  key = key.toUpperCase(); // To handle both upper and lowercase keys
  let color = "";
  switch (key) {
    case "R":
      color = "red";
      break;
    case "Y":
      color = "yellow";
      break;
    case "G":
      color = "green";
      break;
    case "B":
      color = "blue";
      break;
    default:
      console.log(`The ${key} key is not handled`);
  }
  // Changing colors for all <div> elements
  const divElements = Array.from(document.getElementsByTagName("div"));
  divElements.forEach(divElement => {
    divElement.style.backgroundColor = color;
  });
});
