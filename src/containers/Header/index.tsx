import React from 'react';

import { HeaderProps } from '@Types/Header';

import * as S from './styled';

const Header = ({ children }: HeaderProps) => (
  <S.Header>
    {children}
  </S.Header>
);

export default Header;