import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Footer from '@Containers/Footer';
import Header from '@Containers/Header';

import { GlobalStyle } from '@Theme/GlobalStyle';
import { GlobalTheme as theme } from '@Theme/GlobalTheme';
import { AuthProvider } from '@/contexts/AuthContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Yago dos Santos Senhorini - Consultoria e Serviços de informática
        </title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Serviços de consultoria em informática e desenvolvimento de sites sob demanda"
        />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
