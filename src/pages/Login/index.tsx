import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

import Form from '@Components/Form';
import Input from '@Components/Form/components/Input';
import { useAuthDispatch, signIn, useAuthState } from '@Contexts/AuthContext';
import { emailValidator } from '@/utils/emailValidator';

import { LoginForm } from './types';

const LoginPage = () => {
  const authDispatch = useAuthDispatch();
  const { isLoading } = useAuthState();
  const [patternEmail, setPatternEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm, FieldErrors>();

  const onSubmit = handleSubmit(async (data: LoginForm) => {
    try {
      await authDispatch(signIn(data));
    } catch (err) {
      throw new Error('Failed to get user');
    }
  });

  const handleValidateEmail = ({ currentTarget }) => {
    const { value } = currentTarget;
    const isValid = emailValidator(value);

    if (isValid) return setPatternEmail(true);
    return setPatternEmail(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
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
        error={errors.email?.type}
        testId="email-input-component"
        placeholder="exemplo@exemplo.com"
        onChange={(ev) => handleValidateEmail(ev)}
      />
      {!patternEmail && errors.email && (
        <span className="is--error-message">Email inválido</span>
      )}
      <Input
        {...register('password', {
          required: 'Campo obrigatório',
        })}
        type="password"
        name="password"
        id="password"
        error={errors.password?.type}
        testId="email-input-component"
        placeholder="exemplo@exemplo.com"
      />
      <button type="submit">{isLoading ? 'Enviando...' : 'Enviar'}</button>
    </Form>
  );
};

export default LoginPage;
