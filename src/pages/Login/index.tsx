import React from 'react';

import { FieldErrors, useForm } from 'react-hook-form';

import { useAuthDispatch, signIn, useAuthState } from '@Contexts/AuthContext';

import { LoginForm } from './types';

const LoginPage = () => {
  const authDispatch = useAuthDispatch();
  const { isLoading } = useAuthState();

  const { register, handleSubmit } = useForm<LoginForm, FieldErrors>();

  const onSubmit = handleSubmit(async (data: LoginForm) => {
    try {
      await authDispatch(signIn(data));
    } catch (err) {
      throw new Error('Failed to get user');
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        {...register('email', {
          required: 'Campo obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Email inválido',
          },
        })}
        type="text"
        name="email"
        id="email"
        placeholder="exemplo@exemplo.com"
      />
      <input
        {...register('password', {
          required: 'Campo obrigatório',
        })}
        type="password"
        name="password"
        id="password"
        placeholder="exemplo@exemplo.com"
      />
      <button type="submit">{isLoading ? 'Enviando...' : 'Enviar'}</button>
    </form>
  );
};

export default LoginPage;
