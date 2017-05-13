/*
Older movies
*/

const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

const titles = movies => movies.map(movie => movie.title);
const older = movie => movie.year < 2000;
const filter = (movies, fct) => movies.filter(fct);

const moviesBefore2000 = titles(filter(movieList, older));
// Alternative solution without our own filter() function
// const moviesBefore2000 = titles(movieList.filter(older));

console.log(moviesBefore2000);
