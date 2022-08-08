import { Reducer } from 'redux';

import { initialStateInterface } from './interfaces';

import * as t from './types';

const initialState: initialStateInterface = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  cards: [],
};

const reducer: Reducer<initialStateInterface> = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  { type, payload }
): initialStateInterface => {
  switch (type) {
    case t.ERROR:
      return { ...state, isError: payload };
    case t.SUCCESS:
      return { ...state, isSuccess: payload };
    case t.LOADING:
      return { ...state, isLoading: payload };
    case t.SET_KANBAN_DATA:
      return { ...state, cards: payload };
    case t.CREATE_CARD:
      return { ...state, cards: payload };
    case t.UPDATE_CARD:
      return { ...state, cards: payload };
    default:
      return state;
  }
};

export default reducer;
