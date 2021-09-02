import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.178.21:3000',
    withCredentials: false
});

export default api;