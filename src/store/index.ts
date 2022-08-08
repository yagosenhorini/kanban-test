import { createStore, applyMiddleware, Action, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { reducer } from './ducks';
import { AppActions, AppState } from './types';

const logger = createLogger({
  collapsed: true,
  predicate: (_, action: Action) => action.type,
});

const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>];

middlewares.push(logger);

const allStoreEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

export const rootReducers = reducer;

const store: Store = createStore(rootReducers, allStoreEnhancers);

export default store;
