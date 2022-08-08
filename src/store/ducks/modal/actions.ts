// eslint-disable-next-line import/no-cycle
import { AppThunk } from '@Store/types';

import { ModalActionTypes } from './interfaces';
import * as t from './types';

const setModal = (state): ModalActionTypes => ({
  type: t.OPEN_MODAL,
  payload: state,
});

export const toggleModal = (): AppThunk => async (dispatch, getState) => {
  const { modal } = getState();
  const { isOpen } = modal;
  dispatch(setModal(!isOpen));
};
