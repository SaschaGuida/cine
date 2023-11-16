import React, { useState, useEffect } from 'react';

const getFavoritesFromLocalStorage = () => {
    const favoritesString = localStorage.getItem('favorites');
    return favoritesString ? JSON.parse(favoritesString) : [];
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
    };

    return (
        <div>
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
        </div>
    );
};

export default FavoritesList;
