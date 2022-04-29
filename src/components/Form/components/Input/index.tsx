import React from 'react';
import cx from 'classnames';

import { InputProps } from '@Types/Form/components/Input/types';

import * as S from './styled';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type, placeholder, testId, error, success, onChange, ...props },
    ref
  ) => (
    <S.Input
      ref={ref}
      id={id}
      type={type}
      placeholder={placeholder}
      data-testid={testId}
      onChange={onChange}
      className={cx({
        'has--error': error,
        'is--filled': success,
      })}
      {...props}
    />
  )
);

export default Input;
