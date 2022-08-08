import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import LoginPage from '@Pages/Login';

const Login: NextPage = () => (
  <>
    <NextSeo title="Login - Kanban" />
    <LoginPage />
  </>
);

export default Login;
