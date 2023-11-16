'use client';
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovies();

        console.log('API Response:', response);

        setMovies(response);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);
  

  const addToFavorites = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);

    if (selectedMovie && !favorites.some((fav) => fav.id === selectedMovie.id)) {
      const updatedFavorites = [...favorites, selectedMovie];

      setFavorites(updatedFavorites);

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      showNotification('Added to favorites: ' + selectedMovie.title);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img src={movie.posterUrl} alt={movie.title} />
              <h3>{movie.title}</h3>
              {/* Button to add the movie to favorites */}
              <button onClick={() => addToFavorites(movie.id)}>Add to Favorites</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

};

export default MovieList;
