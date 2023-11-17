'use client';
import React, { useEffect, useState } from 'react';

const getFavoritesFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const favoritesString = localStorage.getItem('favorites');
    return favoritesString ? JSON.parse(favoritesString) : [];
  }
  return [];
};

const FavoritesList = () => {
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  useEffect(() => {
    const handleStorageChange = () => {
      const storedFavorites = getFavoritesFromLocalStorage();
      setFavorites(storedFavorites);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const removeFavorite = (favoriteId) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== favoriteId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

/* const getFavoritesFromLocalStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const favoritesString = localStorage.getItem('favorites');
        return favoritesString ? JSON.parse(favoritesString) : [];
    }
    return [];
};

const FavoritesList = () => {
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

    useEffect(() => {
        setFavorites(getFavoritesFromLocalStorage());
    }, []);

    const removeFavorite = (favoriteId) => {
        const updatedFavorites = favorites.filter((favorite) => favorite.id !== favoriteId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }; */

    return (
        /*         <div>
                    <h2>Favorites List</h2>
                    {favorites.length === 0 ? (
                        <p>No favorites yet.</p>
                    ) : (
                        <ul>
                            {favorites.map((favorite) => (
                                <li key={favorite.id}>
                                    {favorite.name}{' '}
                                    <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div> */
        <div>
            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <div className="card-list">
                    {favorites.map((favorite) => (
                        <div key={favorite.id} className="card">
                            <div className="card-content">
                                <div className="card-image">
                                    <img src={favorite.img} alt={favorite.name} />
                                </div>
                                <div className="card-details">
                                    <div className="title-button-container">
                                        <h3>{favorite.title}</h3>
                                        <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
                                    </div>
                                    <p>{favorite.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesList;