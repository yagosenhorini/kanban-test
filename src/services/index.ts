import axios, { AxiosError } from 'axios';

import { BASE_URL } from '@Utils/constants';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const setApiToken = (token: string) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

api.interceptors.request.use(
  (config) => config,
  async (error: AxiosError) => {
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      api.defaults.headers.common.authorization
    ) {
      throw new Error('User session timed out.');
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      api.defaults.headers.common.authorization
    ) {
      throw new Error('User session timed out.');
    }
    return Promise.reject(error);
  }
);
