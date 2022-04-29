import React from 'react';

export type AuthProps = {
  children: React.ReactNode;
  user?: {
    email: string;
    name: string;
  };
};

export type IDispatchProps = {
  dispatch?: React.Dispatch<void>;
};
