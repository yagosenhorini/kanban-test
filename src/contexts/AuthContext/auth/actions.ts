import React from 'react';
import axios, { AxiosError } from 'axios';

import { api, setApiToken } from '@Services/index';

import * as t from './types';
import { Login } from './interfaces';

export const setSuccess = (success: boolean) => ({
  type: t.SUCCESS,
  payload: success,
});

export const setLoading = (loading: boolean) => ({
  type: t.LOADING,
  payload: loading,
});

export const setError = (error: boolean) => ({
  type: t.ERROR,
  payload: error,
});

export const setUser = (user: Login) => ({
  type: t.USER,
  payload: user,
});

export const setLoggedUser = (isLogged: boolean) => ({
  type: t.USER_LOGGED,
  payload: isLogged,
});

export const signIn =
  (form: Login) => async (dispatch: React.Dispatch<object>) => {
    dispatch(setLoading(true));
    try {
      await api.post('login', form).then(({ data }) => setApiToken(data));
      dispatch(setSuccess(true));
      dispatch(setLoggedUser(true));
    } catch (err) {
      dispatch(setError(true));
      const error = err as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        throw new Error('Failed to do login', error);
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
