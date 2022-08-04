import React from 'react';

import { FieldErrors, useForm } from 'react-hook-form';

import Form from '@Components/Form';
import Button from '@Components/Button';
import Input from '@Components/Form/components/Input';

import { useAuthDispatch, signIn, useAuthState } from '@Contexts/AuthContext';

import { LoginForm } from './types';
import * as S from './styled';

const LoginPage = () => {
  const authDispatch = useAuthDispatch();
  const { isLoading } = useAuthState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm, FieldErrors>();

  const onSubmit = handleSubmit(async (data: LoginForm) =>
    authDispatch(signIn(data))
  );

  return (
    <S.FormWrapper>
      <Form onSubmit={onSubmit}>
        <S.FieldsetForm>
          <Input
            {...register('login', {
              required: 'Campo obrigatório',
            })}
            type="text"
            name="login"
            id="login"
            error={errors.login?.type}
            testId="login-input-component"
            placeholder="Usuário"
          />
          {errors?.login && (
            <S.ErrorMessage
              data-testid="error-message"
              className="is--error-message"
            >
              Usuário obrigatório
            </S.ErrorMessage>
          )}
        </S.FieldsetForm>
        <S.FieldsetForm>
          <Input
            {...register('senha', {
              required: 'Campo obrigatório',
            })}
            type="password"
            name="senha"
            id="senha"
            error={errors.senha?.type}
            testId="password-input-component"
            placeholder="Senha"
          />
          {errors?.senha && (
            <S.ErrorMessage
              data-testid="error-message"
              className="is--error-message"
            >
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
