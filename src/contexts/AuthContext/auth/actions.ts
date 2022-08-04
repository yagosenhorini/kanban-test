import React from 'react';
import axios, { AxiosError } from 'axios';

import { mockApi, setApiToken } from '@Services/index';

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

export const signIn =
  (form: Login) => async (dispatch: React.Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      await mockApi.post('login', form).then(({ data }) => setApiToken(data));
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
