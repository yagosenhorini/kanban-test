import React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Footer from '@Containers/Footer';
import Header from '@Containers/Header';

import { GlobalStyle } from '@Theme/GlobalStyle';
import { GlobalTheme as theme } from '@Theme/GlobalTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
