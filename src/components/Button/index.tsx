import React from 'react';

import { ButtonProps } from '@Types/Button';

import * as S from './styled';

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Button type="submit" {...props}>
    {children}
  </S.Button>
);

export default Button;
