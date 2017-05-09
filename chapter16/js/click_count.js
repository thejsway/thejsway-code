/*
Counting clicks
*/

const click = () => {
  const clickCountElement = document.getElementById("clickCount");
  const clickCount = Number(clickCountElement.textContent);
  clickCountElement.textContent = clickCount + 1;
};

document.getElementById("myButton").addEventListener("click", click);

document.getElementById("desactivate").addEventListener("click", () => {
  document.getElementById("myButton").removeEventListener("click", click);
});
