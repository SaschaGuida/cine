//originale
/* 'use client';
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMovies();

        console.log('API Response:', moviesData);

        setMovies(moviesData);
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
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="card-list">
          {movies.map((movie) => (
            <div key={movie.id} className="card">
              <div className="card-content">
                <div className="card-image">
                  <img src={movie.img} alt={movie.title} />
                </div>
                <div className="card-details">
                  <div className="title-button-container">
                    <h3>{movie.title}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className="favorite-svg"
                      onClick={() => addToFavorites(movie.id)}
                    >
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  </div>
                  <p>{movie.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
 */

//v2 
/* 
'use client'
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMovies();
        console.log('API Response:', moviesData);
        setMovies(moviesData);
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

  const showNotification = (message) => {
    toast.success(message);
  };

  return (
    <div>
      <ToastContainer />
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="card-list">
          {movies.map((movie) => (
            <div key={movie.id} className="card">
              <div className="card-content">
                <div className="card-image">
                  <img src={movie.img} alt={movie.title} />
                </div>
                <div className="card-details">
                  <div className="title-button-container">
                    <h3>{movie.title}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className="favorite-svg"
                      onClick={() => addToFavorites(movie.id)}
                    >
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  </div>
                  <p>{movie.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList; */

//v3-def
'use client'
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMovies();
        // console.log('API Response:', moviesData);
        setMovies(moviesData);
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

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId);
  };

  const showNotification = (message) => {
    toast.success(message);
  };

  return (
    <div>
      <ToastContainer />
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="card-list">
          {movies.map((movie) => (
            <div key={movie.id} className="card">
              <div className="card-content">
                <div className="card-image">
                  <img src={movie.img} alt={movie.title} />
                </div>
                <div className="card-details">
                  <div className="title-button-container">
                    <h3>{movie.title}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className={`favorite-svg ${isFavorite(movie.id) ? 'favorite' : ''}`}
                      onClick={() => (isFavorite(movie.id) ? removeFromFavorites(movie.id) : addToFavorites(movie.id))}
                    >
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  </div>
                  <p>{movie.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;