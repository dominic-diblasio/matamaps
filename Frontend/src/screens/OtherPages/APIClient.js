import axios from 'axios';

const APIClient = axios.create({
  baseURL: 'http://localhost:10000/',
  baseURL: 'http://localhost:10000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;