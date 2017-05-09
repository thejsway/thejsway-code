/*
List of desserts
*/

document.querySelector("#addButton").addEventListener("click", () => {
  const dessertName = prompt("Enter the dessert name:");
  const dessertElement = document.createElement("li");
  dessertElement.textContent = dessertName;
  dessertElement.addEventListener("click", e => {
    const newName = prompt(
      `Update the name of dessert ${e.target.textContent}:`
    );
    e.target.textContent = newName;
  });

  document.getElementById("desserts").appendChild(dessertElement);
});
