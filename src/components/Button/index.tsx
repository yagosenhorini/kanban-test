import React from 'react';

import { ButtonProps } from '@Types/Button';

import * as S from './styled';

const Button = ({ children, isPrimary, ...props }: ButtonProps) => (
  <S.Button isPrimary={isPrimary} type="submit" {...props}>
    {children}
  </S.Button>
);

export default Button;
