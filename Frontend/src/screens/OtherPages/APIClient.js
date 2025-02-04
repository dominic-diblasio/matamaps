import axios from 'axios';

const APIClient = axios.create({
  baseURL: 'http://0.0.0.0:10000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;