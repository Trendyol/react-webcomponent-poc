import { createMemoryHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'MyTypes';

import rootEpic from './root-epic';
import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import services from './services';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
  dependencies: services
});
export const history = createMemoryHistory();

const middlewareArr = [routerMiddleware(history), epicMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewareArr));

const initialState = {};
export const store = createStore(rootReducer(history), initialState, enhancer);

epicMiddleware.run(rootEpic);

export default store;
