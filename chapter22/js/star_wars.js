/*
Star Wars planets
*/

// Show info about a planet
const showPlanetInfo = planetId => {
  fetch(`http://swapi.dev/api/planets/${planetId}`)
    .then(response => response.json())
    .then(planet => {
      const movieCount = planet.films.length;
      // Create DOM elements for planet
      const planetNameElement = document.createElement("h3");
      planetNameElement.textContent = planet.name;
      const planetSummaryElement = document.createElement("p");
      planetSummaryElement.textContent = `Climate: ${planet.climate}. Population: ${planet.population}. 
        Appears in ${movieCount} movie(s).`;
      // Add elements to the page
      const planetInfoElement = document.getElementById("infos");
      planetInfoElement.innerHTML = "";
      planetInfoElement.appendChild(planetNameElement);
      planetInfoElement.appendChild(planetSummaryElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

const planetLinksElement = document.getElementById("links");

for (let planetId = 1; planetId <= 10; planetId++) {
  // Create planet link
  const planetLinkElement = document.createElement("a");
  planetLinkElement.id = planetId;
  planetLinkElement.textContent = planetId;
  planetLinkElement.href = "#";
  // Handle click on link
  planetLinkElement.addEventListener("click", e => {
    e.preventDefault();
    showPlanetInfo(e.target.id);
  });
  // Add link to the page
  planetLinksElement.appendChild(planetLinkElement);
  planetLinksElement.appendChild(document.createTextNode(" | "));
}
planetLinksElement.appendChild(document.createTextNode(" ..."));
