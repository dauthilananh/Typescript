import axios from "axios";

const clientApiUrl = 'http://localhost:3000';

const api = axios.create({
    baseURL: clientApiUrl
});

export default api;