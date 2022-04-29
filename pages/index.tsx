import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import LoginPage from '@Pages/Login';

const Login: NextPage = () => (
  <>
    <NextSeo title="Yago dos Santos Senhorini - Serviços e Consultoria de Tecnologia" />
    <LoginPage />
  </>
);

export default Login;
