import { Reducer } from 'redux';

import { IModal } from './interfaces';

import * as t from './types';

const initialState: IModal = {
  isOpen: false,
};

const reducer: Reducer<IModal> = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }
): IModal => {
  switch (type) {
    case t.OPEN_MODAL:
      return { ...state, isOpen: payload };
    default:
      return state;
  }
};

export default reducer;
