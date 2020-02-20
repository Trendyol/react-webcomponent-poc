import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { combineReducers } from 'redux';

type Status = { success: boolean; time: number };

type ComponentActions = ActionType<typeof actions>;

const loading = createReducer<boolean, ComponentActions>(true)
  .handleAction([actions.lookupAsync.request], () => true)
  .handleAction([actions.lookupAsync.success, actions.lookupAsync.failure], () => false);

const status = createReducer<Status, ComponentActions>({} as any)
  .handleAction(actions.lookupAsync.success, (state, action) => ({
    ip: action.payload.query,
    success: true,
    time: Date.now()
  }))
  .handleAction(actions.lookupAsync.failure, (state, action) => ({ success: false, time: Date.now() }));

export default combineReducers({ loading, status });
