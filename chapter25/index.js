const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

const app = express();
const upload = multer();
const jsonParser = bodyParser.json();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve content of the "public" subfolder directly
app.use(express.static("public"));

// Define an article list
const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
  }
];

// Web routes

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/hello", (request, response) => {
  response.sendFile(`${__dirname}/views/hello.html`);
});

app.post("/animals", upload.array(), (request, response) => {
  const name = request.body.name;
  const vote = request.body.strongest;
  response.send(`Hello ${name}, you voted: ${vote}`);
});

app.post("/tshirt", upload.array(), (request, response) => {
  const size = request.body.size;
  const color = request.body.color;
  response.send(`Command received! Size: ${size}, color: ${color}`);
});

app.post("/articles", upload.array(), (request, response) => {
  const title = request.body.title;
  const content = request.body.content;
  // Create a new array containing only ids
  const idList = articles.map(article => article.id);
  // Reducing the array to the maximum id value
  const maxId = idList.reduce((acc, value) => {
    if (value > acc) return value;
    return acc;
    // Or: (value > acc) ? value : acc;
  });
  const id = maxId + 1;
  // Add new article to the list
  articles.push({ id, title, content });
  response.send(`New article added successfully with ID ${id}!`);
});

// JSON API

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

app.post("/api/cars", jsonParser, (request, response) => {
  const cars = request.body;
  response.send(`You sent me a list of cars: ${JSON.stringify(cars)}`);
});

app.post("/api/countries", jsonParser, (request, response) => {
  const traveler = request.body;
  response.send(
    `Your name is ${traveler.name} and you visited ${traveler.countries
      .length} countries. Keep traveling!`
  );
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
