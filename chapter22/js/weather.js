/*
Weather in your area
*/

// My API key is 91c73438eb56a544b5ffba0e28613937
// Please use your own to test this service
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Bordeaux,fr&APPID=91c73438eb56a544b5ffba0e28613937&units=metric"
)
  .then((response) => response.json())
  .then((weatherData) => {
    // Extract some weather properties from API call result
    const location = weatherData.name;
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;

    // Create DOM elements for properties
    const summaryElement = document.createElement("div");
    summaryElement.textContent = `Temperature is ${temperature} °C with ${humidity}% humidity.`;
    // Add location to title
    document.querySelector("h2").textContent += ` ${location}`;
    // Add elements to the page
    const weatherElement = document.getElementById("weather");
    weatherElement.appendChild(summaryElement);
  })
  .catch((err) => {
    console.error(err.message);
  });
