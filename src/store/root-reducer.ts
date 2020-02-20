import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import language from '../containers/language-provider/reducer';
import counter from '../containers/counter/reducer';
import ipCheck from '../containers/ip-check/reducer';

const rootReducer = (history: History) =>
  combineReducers({
    counter,
    ipCheck,
    language,
    router: connectRouter(history)
  });

export default rootReducer;
