import React from 'react';
import useThunkReducer from 'react-hook-thunk-reducer';

import { reducer, initialState } from './auth/reducer';

import { AuthContext, AuthDispatchContext } from './Contexts';

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
