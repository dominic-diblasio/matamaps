import axios from 'axios';

const APIClient = axios.create({
  baseURL: `https://matamaps-middleware.onrender.com/`,
  // baseURL: `http://0.0.0.0:3500`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;