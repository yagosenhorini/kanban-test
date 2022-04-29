import React from 'react';

import { mockApi } from '@Services/index';

import * as t from './types';
import { IUser } from './interfaces';

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

export const setUser = (user: IUser) => ({
  type: t.USER,
  payload: user,
});

export const signIn =
  (data: { email: string }) => async (dispatch: React.Dispatch<any>) => {
    await dispatch(setLoading(true));
    try {
      const { data: response } = await mockApi.get(
        `/register?email=${data.email}`
      );
      const user: IUser = {
        name: response[0].nome,
        email: response[0].email,
      };

      localStorage.setItem('user', JSON.stringify(user));

      await dispatch(setUser(user));
    } catch (err) {
      await dispatch(setError(true));
      throw new Error('Failed to login');
    } finally {
      await dispatch(setLoading(false));
    }
  };
