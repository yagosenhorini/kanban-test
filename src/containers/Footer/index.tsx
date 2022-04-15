import React from 'react';

import { FooterProps } from '@Types/Footer';

import * as S from './styled';

const Footer: React.FC<FooterProps> = () => (
  <S.Footer>&copy; Senhorini Consultoria e Serviços - <span>2022</span></S.Footer>
);

export default Footer;