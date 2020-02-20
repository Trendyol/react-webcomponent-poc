import { combineEpics } from 'redux-observable';

import * as ipCheckEpics from '../containers/ip-check/epics';

export default combineEpics(...Object.values(ipCheckEpics));
