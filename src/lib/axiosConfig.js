import axios from 'axios';
const API_URL = `https://api.github.com/`;

export const gitAxiosConig = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`
  }
});
