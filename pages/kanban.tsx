import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Footer from '@Containers/Footer';
import Header from '@Containers/Header';

import KanbanPage from '@Pages/Kanban';

const Kanban: NextPage = () => (
  <>
    <NextSeo title="Home - Kanban" />
    <Header />
    <KanbanPage />
    <Footer />
  </>
);

export default Kanban;
