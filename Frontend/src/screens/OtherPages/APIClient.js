import axios from 'axios';

const APIClient = axios.create({
  baseURL: 'https://matamaps-middleware.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;