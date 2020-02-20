import { combineReducers } from 'redux';
import * as actions from './actions';
import { ActionType, createReducer } from 'typesafe-actions';

type LanguageActions = ActionType<typeof actions>;

const locale = createReducer<string, LanguageActions>('tr').handleAction(
  actions.setLocale,
  (state, action) => action.payload
);

const reducer = combineReducers({ locale });

export default reducer;
