import axios from 'axios';
const dotenv = require('dotenv');

dotenv.config();

var url;
switch(process.env.ENV_TYPE)
{
    case 'prod':
      url = process.env.url;
      break;
    default:
      url = 'https://localhost:3500';
      break;
}

const APIClient = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;