import { combineReducers } from 'redux';
import * as actions from './actions';
import { ActionType, createReducer } from 'typesafe-actions';

type EditorActions = ActionType<typeof actions>;

const count = createReducer<number, EditorActions>(0)
  .handleAction(actions.increment, state => state + 1)
  .handleAction(actions.decrement, state => state - 1)
  .handleAction(actions.set, (_, action) => action.payload);

export default combineReducers({ count });
