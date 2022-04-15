import React from 'react';
import { HeaderProps } from '@Types/Header';

const Header = ({ children }: HeaderProps) => (
  <header>
    {children}
  </header>
);

export default Header;