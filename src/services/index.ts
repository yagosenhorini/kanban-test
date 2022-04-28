import axios from 'axios';

export const mockApi = axios.create({
  baseURL: 'https://61cb1117194ffe0017788b4d.mockapi.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
