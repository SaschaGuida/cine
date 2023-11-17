export const BASE_URL = 'https://eyiynmcjpvmgdvsekzby.supabase.co/rest/v1/movie';
export const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5aXlubWNqcHZtZ2R2c2VremJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDUyMjcsImV4cCI6MjAxNTc4MTIyN30.83Q_oTuMriKG5kw5VGWuWcnaOsXaekD0_ZbSezwNIiY';

export const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
        'apikey': API_KEY,
    },
};

export const fetchMovies = async () => {
    try {
        const response = await fetch(BASE_URL, HEADERS);

        // console.log('Response Status:', response.status);
        const data = await response.json();
        // console.log('Response Data:', data);

        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }

        const extractedMovies = data.map((movie) => ({
            id: movie.id,
            title: movie.title,
            description: movie.description,
            img: movie.img,
        }));

        return extractedMovies;
    } catch (error) {
        console.error('Error fetching movies:', error.message);
        throw error;
    }
};



// api.js
/* export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async (pokemonId) => {
    try {
        const response = await fetch(`${BASE_URL}${pokemonId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemon data');
        }
        const data = await response.json();

        console.log('API Response:', data);

        return data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error.message);
        throw error;
    }
}; */
