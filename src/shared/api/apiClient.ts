import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://click-dish-api.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
