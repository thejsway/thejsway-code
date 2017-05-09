/*
Add a paragraph
*/

const paragraphElement = document.createElement("p");
const linkElement = document.createElement("a");
linkElement.href =
  "https://en.wikipedia.org/wiki/List_of_programming_languages";
linkElement.textContent = "list";
paragraphElement.appendChild(
  document.createTextNode("Here is a more complete ")
);
paragraphElement.appendChild(linkElement);
paragraphElement.appendChild(document.createTextNode(" of languages."));
document.getElementById("content").appendChild(paragraphElement);
