import { ThunkAction } from 'redux-thunk';
// eslint-disable-next-line import/no-cycle
import { reducer } from './ducks';
import { KanbanActionTypes } from './ducks/kanban/interfaces';
import { ModalActionTypes } from './ducks/modal/interfaces';

// eslint-disable-next-line no-undef
export type AppState = ReturnType<typeof reducer>;

export type AppActions = KanbanActionTypes | ModalActionTypes;

export type AppThunk = ThunkAction<void, AppState, null, AppActions>;
