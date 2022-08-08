import React from 'react';

import * as S from './styled';
import { SelectProps } from './types';

const Select = ({ list, onChange }: SelectProps) => (
  <S.Select onChange={onChange} data-testid="select-component">
    <S.Option value="">Selecione</S.Option>
    {list.map(({ id, value, text }) => (
      <S.Option key={id} value={value}>
        {text}
      </S.Option>
    ))}
  </S.Select>
);

export default Select;
