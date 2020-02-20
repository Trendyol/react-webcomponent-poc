import { createAsyncAction } from 'typesafe-actions';
import { IPQueryResponse } from '../../services/ip-api/models/IPQueryResponse';

export const lookupAsync = createAsyncAction(
  `editor/containers/ip-check/LOOKUP_REQUEST`,
  `editor/containers/ip-check/LOOKUP_SUCCESS`,
  `editor/containers/ip-check/LOOKUP_FAILED`
)<undefined, IPQueryResponse, Error>();
