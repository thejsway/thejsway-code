/*
Display list of paintings
*/

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  .then(response => response.json()) // Access and return response's JSON content
  .then(paintings => {
    const paintingsElement = document.getElementById("paintings");
    paintings.forEach(painting => {
      const paintingElement = document.createElement("tr");
      paintingElement.innerHTML = `<td>
        ${painting.name}
        </td>
        <td>
        ${painting.year}
        </td>
        <td>
        ${painting.artist}
        </td>`;
      paintingsElement.appendChild(paintingElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  });
