import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;

const subURL = {
    fetchNetflixTrending: `/trending/movie/day?api_key=${API_KEY}`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchAnimeMovies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
}

const baseURL = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default subURL;
export { baseURL };