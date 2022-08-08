/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';

import modal from './modal';
import kanban from './kanban';

export const reducer = combineReducers({
  kanban,
  modal,
});
