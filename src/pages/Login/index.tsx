import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

import Form from '@Components/Form';
import Button from '@Components/Button';
import Input from '@Components/Form/components/Input';

import { useAuthDispatch, signIn, useAuthState } from '@Contexts/AuthContext';

import { emailValidator } from '@Utils/emailValidator';

import { LoginForm } from './types';
import * as S from './styled';

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
      alert('Usuário logado');
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
    <S.FormWrapper>
      <Form onSubmit={onSubmit}>
        <S.FieldsetForm>
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
          {!patternEmail && errors?.email && (
            <S.ErrorMessage className="is--error-message">
              Email inválido
            </S.ErrorMessage>
          )}
        </S.FieldsetForm>
        <S.FieldsetForm>
          <Input
            {...register('password', {
              required: 'Campo obrigatório',
            })}
            type="password"
            name="password"
            id="password"
            error={errors.password?.type}
            testId="password-input-component"
            placeholder="Senha"
          />
          {errors?.password && (
            <S.ErrorMessage className="is--error-message">
              Senha obrigatória
            </S.ErrorMessage>
          )}
        </S.FieldsetForm>
        <Button data-testid="submit-button">
          {isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
      </Form>
    </S.FormWrapper>
  );
};

export default LoginPage;
