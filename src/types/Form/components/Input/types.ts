import React from 'react';

export type InputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  testId: string;
  name: string;
  id: string;
  error?: string;
  success?: string;
  placeholder: string;
};

// export type InputType = InputProps &
//   React.HTMLProps<HTMLInputElement> &
//   React.HTMLAttributes<HTMLInputElement>;
