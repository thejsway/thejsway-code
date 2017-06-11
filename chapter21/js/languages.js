/*
Display language list
*/

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    const languages = text.split(";");
    const listElement = document.getElementById("languageList");
    languages.forEach(language => {
      // Create the list item for the language
      const languageElement = document.createElement("li");
      languageElement.textContent = language;
      // Add the item to the list
      listElement.appendChild(languageElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  });
