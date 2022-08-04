import axios, { AxiosError } from 'axios';

import { BASE_URL } from '@Utils/constants';

export const mockApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const setApiToken = (token: string) => {
  mockApi.defaults.headers.common.authorization = `Bearer ${token}`;
};

mockApi.interceptors.request.use(
  (config) => config,
  async (error: AxiosError) => {
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      mockApi.defaults.headers.common.authorization
    ) {
      throw new Error('Sem autorização ou autorização revogada');
    }
    return Promise.reject(error);
  }
);

mockApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      mockApi.defaults.headers.common.authorization
    ) {
      throw new Error('Sem autorização ou autorização revogada');
    }
    return Promise.reject(error);
  }
);
