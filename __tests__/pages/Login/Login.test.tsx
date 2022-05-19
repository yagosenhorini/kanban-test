import React from 'react';

import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { ThemeProvider } from 'styled-components';

import LoginPage from '@Pages/Login';
import { AuthProvider } from '@Contexts/AuthContext';
import { GlobalTheme as theme } from '@Theme/GlobalTheme';

describe('LoginPage', () => {
  const componentToRender = (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    </AuthProvider>
  );

  it('Should render the home page', () => {
    const component = render(componentToRender);
    expect(component).toBeTruthy();
  });

  it('should fill the inputs and submit the form', async () => {
    const { findByTestId } = render(componentToRender);

    const $form = await findByTestId('form-component');
    const $inputEmail = await findByTestId('email-input-component');
    const $inputPassword = await findByTestId('password-input-component');

    fireEvent.change($inputEmail, {
      target: { value: 'yagosenhorini@gmail.com' },
    });
    fireEvent.change($inputPassword, { target: { value: '123' } });

    fireEvent.submit($form);
  });
});
