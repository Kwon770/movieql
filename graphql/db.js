let movies = [
  { id: "1", name: "Star Wars - The new one", score: 1 },
  { id: "2", name: "Avengers - The new one", score: 10 },
  { id: "3", name: "The Godfather I", score: 6 },
  { id: "4", name: "Logan", score: 8 }
];

export const getMovies = () => movies;

export const getById = id => {
  const filtereMovies = Movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
