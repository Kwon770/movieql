// 직접 db를 제작하는 경우

let movies = [
  { id: 1, name: "Star Wars - The new one", score: 1 },
  { id: 2, name: "Avengers - The new one", score: 10 },
  { id: 3, name: "The Godfather I", score: 6 },
  { id: 4, name: "Logan", score: 8 }
];

export const getMovies = () => movies;

export const getById = id => {
  const filtereMovies = Movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
