import React from 'react';

import { FormProps } from '@Types/Form/types';

const Form = ({ children, testId, onSubmit }: FormProps) => (
  <form onSubmit={onSubmit} data-testid={testId}>
    {children}
  </form>
);

export default Form;
