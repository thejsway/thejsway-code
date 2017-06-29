/*
Weather in your area
*/

// Please generate yourself an API key instead of using mine
fetch(
  "http://api.wunderground.com/api/50a65432f17cf542/conditions/q/france/bordeaux.json"
)
  .then(response => response.json())
  .then(weather => {
    // Access some weather properties
    const location = weather.current_observation.display_location.full;
    const temperature = weather.current_observation.temp_c;
    const humidity = weather.current_observation.relative_humidity;
    const imageUrl = weather.current_observation.icon_url;
    // Create DOM elements for properties
    const summaryElement = document.createElement("div");
    summaryElement.textContent = `Temperature is ${temperature} °C with ${humidity} humidity.`;
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    // Add location to title
    document.querySelector("h2").textContent += ` ${location}`;
    // Add elements to the page
    const weatherElement = document.getElementById("weather");
    weatherElement.appendChild(summaryElement);
    weatherElement.appendChild(imageElement);
  })
  .catch(err => {
    console.error(err.message);
  });
