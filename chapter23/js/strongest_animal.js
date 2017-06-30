/*
Strongest animal
*/

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch("https://thejsway.glitch.me/animals", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});
