/*
Blog example
*/

fetch("https://thejsway.glitch.me/api/articles")
  .then(response => response.json())
  .then(articles => {
    articles.forEach(article => {
      // Create title element
      const titleElement = document.createElement("h2");
      titleElement.textContent = article.title;
      // Create content element
      const contentElement = document.createElement("p");
      contentElement.textContent = article.content;
      // Add title and content to the page
      const articlesElement = document.getElementById("articles");
      articlesElement.appendChild(titleElement);
      articlesElement.appendChild(contentElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  });
