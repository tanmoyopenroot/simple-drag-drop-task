import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import { IAppState } from '../common/state';
import reducers from '../reducers';
import middlewares from '../middlewares';
import { composeEnhancers } from './utils';

export const initStore = (initialState?: IAppState) => {
  const rootReducer = combineReducers({ ...reducers });
  const combinedMiddlewares = applyMiddleware(...middlewares);
  const enhancers = composeEnhancers(combinedMiddlewares);

  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};
