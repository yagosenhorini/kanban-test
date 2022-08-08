import React from 'react';

export type SelectProps = {
  list: {
    id: number;
    value: string;
    text: string;
  }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};
