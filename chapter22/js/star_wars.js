/*
Star Wars universe
*/

// Anonymous function that takes a character id and return its name
const getCharacterName = id =>
  fetch(`http://swapi.co/api/people/${id}`)
    .then(response => response.json())
    .then(character => character.name);

fetch("http://swapi.co/api/planets")
  .then(response => response.json())
  .then(planets => {
    // Get planet count
    const planetCount = planets.count;
    // Create planet names array
    const planetNames = planets.results.map(planet => planet.name);
    // Compute total population by reducing the planets array
    const totalPopulation = planets.results.reduce((acc, planet) => {
      if (planet.population !== "unknown") {
        // Planet population must by converted to a integer before being added
        return acc + Number(planet.population);
      }
      return acc;
      /* Alternative solution:
      return planet.population !== "unknown"
        ? acc + Number(planet.population)
        : acc; */
    }, 0);
    // Create DOM elements
    const planetSummaryElement = document.createElement("p");
    planetSummaryElement.textContent = `There are ${planetCount} planets in the Star Wars universe.
        Their total population is ${totalPopulation} people. The planets are:`;
    const planetListElement = document.createElement("ul");
    planetNames.forEach(name => {
      const planetNameElement = document.createElement("li");
      planetNameElement.textContent = name;
      planetListElement.appendChild(planetNameElement);
    });
    // Add info to the page
    const planetInfoElement = document.getElementById("planetInfo");
    planetInfoElement.appendChild(planetSummaryElement);
    planetInfoElement.appendChild(planetListElement);
  })
  .catch(err => {
    console.error(err.message);
  });
