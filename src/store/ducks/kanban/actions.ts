// eslint-disable-next-line import/no-cycle
import { AppThunk } from '@Store/types';
import { api } from '@Services/index';

import { ModalForm } from '@Containers/Modal/types';

import { KanbanActionTypes, IKanbanData } from './interfaces';
import * as t from './types';

const setError = (state): KanbanActionTypes => ({
  type: t.ERROR,
  payload: state,
});

const setLoading = (state): KanbanActionTypes => ({
  type: t.LOADING,
  payload: state,
});

const setSuccess = (state): KanbanActionTypes => ({
  type: t.SUCCESS,
  payload: state,
});

const getCardsData = (state: IKanbanData): KanbanActionTypes => ({
  type: t.SET_KANBAN_DATA,
  payload: state,
});

const createCardData = (state: IKanbanData): KanbanActionTypes => ({
  type: t.CREATE_CARD,
  payload: state,
});

const updateCardData = (state: IKanbanData): KanbanActionTypes => ({
  type: t.UPDATE_CARD,
  payload: state,
});

export const getCards = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await api.get('/cards/');
    dispatch(getCardsData(data));
    dispatch(setSuccess(true));
  } catch (err) {
    dispatch(setError(true));
    throw new Error('Failed to get data');
  } finally {
    dispatch(setLoading(false));
    dispatch(setSuccess(false));
  }
};

export const createCard =
  (data: ModalForm): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const body = {
        ...data,
        lista: 'ToDo',
      };
      await api.post('/cards', body);
      dispatch(createCardData(body));
      dispatch(setSuccess(true));
    } catch (err) {
      dispatch(setError(true));
      throw new Error('Failed to create new card');
    } finally {
      dispatch(setLoading(false));
      dispatch(setSuccess(false));
    }
  };

export const updateCard =
  (id: string | number, body: IKanbanData): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await api.put(`/cards/${id}`, body);
      dispatch(updateCardData(body));
      dispatch(setSuccess(true));
    } catch (err) {
      dispatch(setError(true));
      throw new Error('Failed to update card');
    } finally {
      dispatch(setLoading(false));
      dispatch(setSuccess(false));
    }
  };

export const deleteCard =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await api.delete(`/cards/${id}`);
      dispatch(setSuccess(true));
    } catch (err) {
      dispatch(setError(true));
      throw new Error('Failed to create new card');
    } finally {
      dispatch(setLoading(false));
    }
  };
