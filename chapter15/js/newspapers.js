/*
Newspaper list
*/

// Newspaper list
const newspapers = [
  "https://www.nytimes.com",
  "https://www.washingtonpost.com",
  "http://www.economist.com"
];

// Access the parent element once and for all
const contentElement = document.getElementById("content");

newspapers.forEach(newspaper => {
  // Create the link
  const linkElement = document.createElement("a");
  linkElement.textContent = newspaper;
  linkElement.href = newspaper;
  // Add the link
  contentElement.appendChild(linkElement);
  // Add a <br> tag
  contentElement.appendChild(document.createElement("br"));
});
