/*
Random beer
*/

// Anonymous function for retrieving and displaying a random beer
const grabRandomBeer = () => {
  // Fetch random beer data from API
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
      // API returns an array containg only one element: we get it
      const beer = beers[0];
      // Create DOM elements for some beer properties
      const nameElement = document.createElement("h2");
      nameElement.textContent = beer.name;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = beer.description;
      const summaryElement = document.createElement("p");
      summaryElement.textContent = `Alcohol By Volume: ${beer.abv}%.
        Volume: ${beer.volume.value} ${beer.volume.unit}.
        First brewed on ${beer.first_brewed}.`;
      // Clear previous beer data
      const beerElement = document.getElementById("beer");
      beerElement.innerHTML = "";
      // Add beer info to the page
      beerElement.appendChild(nameElement);
      beerElement.appendChild(descriptionElement);
      beerElement.appendChild(summaryElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Handle click on button
document.getElementById("grabButton").addEventListener("click", grabRandomBeer);
