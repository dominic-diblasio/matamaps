import axios from 'axios';
//const dotenv = require('dotenv');

// Load environment variables from .env file
//dotenv.config();

const APIClient = axios.create({
  //baseURL: `http://0.0.0.0:10000/`,
  baseURL: `http://localhost:10000/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;