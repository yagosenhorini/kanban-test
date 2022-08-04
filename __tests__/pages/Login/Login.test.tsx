import React from 'react';

import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { render, act, fireEvent, waitFor } from '@testing-library/react';

import MockAdapter from 'axios-mock-adapter';

import LoginPage from '@Pages/Login';
import { AuthProvider } from '@Contexts/AuthContext';
import { GlobalTheme as theme } from '@Theme/GlobalTheme';
import { mockApi } from '@Services/index';

const mockAxios = new MockAdapter(mockApi);

describe('LoginPage', () => {
  const componentToRender = (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    </AuthProvider>
  );

  beforeEach(() => {
    mockAxios.reset();
  });

  it('Should render the home page', () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });

  it('should fill the inputs and submit the form', async () => {
    const { findByTestId } = render(componentToRender);

    const loginValue = 'letscode';
    const passwordValue = 'lets@123';

    const $form = await findByTestId('form-component');
    const $inputEmail = await findByTestId('login-input-component');
    const $inputPassword = await findByTestId('password-input-component');

    await act(async () => {
      await userEvent.type($inputEmail, loginValue);
      await userEvent.type($inputPassword, passwordValue);
      fireEvent.submit($form);
    });

    const loginData = {
      login: loginValue,
      senha: passwordValue,
    };

    mockAxios.onPost('/login').reply(200, loginData);

    expect(mockAxios.history.post.length).toBe(1);
    expect(mockAxios.history.post[0].data).toBe(JSON.stringify(loginData));
  });

  it('should fill the inputs with wrong values and submit the form', async () => {
    const { findByTestId } = render(componentToRender);

    const loginValue = 'letscode1';
    const passwordValue = 'lets@12';

    const $form = await findByTestId('form-component');
    const $inputEmail = await findByTestId('login-input-component');
    const $inputPassword = await findByTestId('password-input-component');

    await act(async () => {
      await userEvent.type($inputEmail, loginValue);
      await userEvent.type($inputPassword, passwordValue);
      fireEvent.submit($form);
    });

    const loginData = {
      login: loginValue,
      senha: passwordValue,
    };

    mockAxios.onPost('/login').reply(401, loginData);

    expect(mockAxios.history.post.length).toBe(1);
    expect(mockAxios.history.post[0].data).toBe(JSON.stringify(loginData));
  });

  it('should not fill the inputs and try to submit the form', async () => {
    const { findByTestId, findAllByTestId } = render(componentToRender);

    const $form = await findByTestId('form-component');

    await act(async () => {
      fireEvent.submit($form);
    });

    await waitFor(async () => {
      expect((await findAllByTestId('error-message')).length).toBe(2);
    });
  });
});
