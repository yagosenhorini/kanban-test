import { useContext } from 'react';

import { AuthContext, AuthDispatchContext } from './Contexts';

export const useAuthState = () => {
  const state = useContext(AuthContext);

  if (state === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return state;
};

export const useAuthDispatch = () => {
  const dispatch = useContext(AuthDispatchContext);

  if (dispatch === undefined) {
    throw new Error(
      'useAuthDispatch must be used within a AuthDispatchProvider'
    );
  }
  return dispatch;
};
