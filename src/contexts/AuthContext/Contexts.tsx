import React, { createContext } from 'react';

import { InitialStateProps } from './auth/interfaces';

export const AuthContext = createContext<InitialStateProps | undefined>(
  undefined
);
export const AuthDispatchContext = createContext<React.Dispatch<any>>(() => {});
