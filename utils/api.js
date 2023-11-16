// api.js
export const BASE_URL = 'https://mttlioitimpeuzlwsgql.supabase.co/rest/v1/movies';
export const HEADERS = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dGxpb2l0aW1wZXV6bHdzZ3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MjM3MDAsImV4cCI6MjAwNjk5OTcwMH0.yEpNXeO-cwzp_tBNeITxr2RRytwbcVnMlarJs0cpNYY',
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
};
