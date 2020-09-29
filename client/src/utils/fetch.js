import axios from 'axios';
//distinguish from api calls once authenticated
const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export { publicFetch };
