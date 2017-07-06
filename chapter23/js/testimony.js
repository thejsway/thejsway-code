/*
Send a testimony on your learning experience
*/

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  // Create JSON payload for the request
  const name = document.getElementById("name").value;
  const evaluation = document.getElementById("evaluation").value;
  const message = document.getElementById("message").value;
  const testimony = { name, evaluation, message };

  fetch("https://thejsway.glitch.me/api/testimony", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(testimony)
  })
    .then(response => response.text())
    .then(result => {
      // Reset form fields
      e.target.reset();
      // Display result sent by the server
      document.getElementById("result").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});
