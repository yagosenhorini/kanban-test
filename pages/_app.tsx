import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '@Contexts/AuthContext';

import store from '@Store/index';

import { GlobalStyle } from '@Theme/GlobalStyle';
import { GlobalTheme as theme } from '@Theme/GlobalTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
