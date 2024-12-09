import axios from 'axios';
//import dotenv from 'dotenv';
//dotenv.config();

/*
var url;
switch(process.env.ENV_TYPE)
{
    case 'prod':
      url = process.env.MIDDLEWARE_URL;
      break;
    default:
      url = 'https://localhost:3500';
      break;
}
      */

const APIClient = axios.create({
  //baseURL: process.env.MIDDLEWARE_URL,
  baseURL: 'https://matamaps-middleware.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;