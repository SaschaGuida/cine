/* export const BASE_URL = 'https://mttlioitimpeuzlwsgql.supabase.co/rest/v1/movies';
export const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ',
    },
};

export const fetchMovies = async () => {
    try {
        const response = await fetch(BASE_URL, HEADERS);

        console.log('Response Status:', response.status);
        const data = await response.json();
        console.log('Response Data:', data);

        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }

        const extractedMovies = data.moviesCollection.edges.map((edge) => edge.node);

        return extractedMovies;
    } catch (error) {
        console.error('Error fetching movies:', error.message);
        throw error;
    }
}; */


// api.js
export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async (pokemonId) => {
    try {
        const response = await fetch(`${BASE_URL}${pokemonId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemon data');
        }
        const data = await response.json();

        // Log the entire API response
        console.log('API Response:', data);

        return data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error.message);
        throw error;
    }
};
