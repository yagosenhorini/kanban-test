import React from 'react';
import useThunkReducer from 'react-hook-thunk-reducer';

import { reducer, initialState } from './auth/reducer';

import { AuthContext, AuthDispatchContext } from './Contexts';
import { AuthProps } from './types';

export const AuthProvider = ({ children }: AuthProps) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
