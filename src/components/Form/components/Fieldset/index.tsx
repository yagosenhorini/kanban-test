import React from 'react';

import * as S from './styled';
import { FieldsetProps } from './types';

const Fieldset = ({ children }: FieldsetProps) => (
  <S.FieldsetForm data-testid="fieldset-component">{children}</S.FieldsetForm>
);

export default Fieldset;
