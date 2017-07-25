/*
T-shirt choice
*/

document.getElementById("buyButton").addEventListener("click", () => {
  const formData = new FormData();
  formData.append("size", "L");
  formData.append("color", "blue");

  fetch("https://thejsway-server.herokuapp.com/tshirt", {
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
