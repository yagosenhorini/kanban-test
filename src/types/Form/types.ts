import React from 'react';

export type FormProps = {
  children: React.ReactNode;
  testId: string;
  onSubmit: () => void;
};
