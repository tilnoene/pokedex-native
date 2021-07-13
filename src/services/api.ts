import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokedex20201.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;