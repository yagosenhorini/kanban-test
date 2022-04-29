import React from 'react';

import { FormProps } from '@Types/Form/types';

import * as S from './styled';

const Form = ({ children, onSubmit }: FormProps) => (
  <S.Form onSubmit={onSubmit} data-testid="form-component" noValidate>
    {children}
  </S.Form>
);

export default Form;
