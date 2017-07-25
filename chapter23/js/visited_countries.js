/*
Send visited coutnries
*/

// Create traveler info
const traveler = {
  name: "Sam",
  countries: [
    {
      name: "Ecuador",
      year: 2003
    },
    {
      model: "Portugal",
      color: 2004
    },
    {
      model: "Russia",
      color: 2016
    }
  ]
};

// Send this object as JSON data to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });
