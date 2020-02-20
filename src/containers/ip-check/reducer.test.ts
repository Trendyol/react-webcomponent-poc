import reducer from './reducer';
import * as actions from './actions';

describe('ip-check@reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {} as any);
    expect(state).toEqual({ loading: true, status: {} });
  });

  it('should change the loading to true', () => {
    const state = reducer({ loading: false, status: {} as any }, actions.lookupAsync.request());
    expect(state).toEqual({ loading: true, status: {} });
  });

  it('should change the loading to false', () => {
    const loadingCompleteActions = [actions.lookupAsync.success({} as any), actions.lookupAsync.failure(new Error())];

    for (const action of loadingCompleteActions) {
      const state = reducer({ loading: true, status: {} as any }, action);
      expect(state.loading).toBe(false);
    }
  });

  it('should change the status to true for success action', () => {
    const action = actions.lookupAsync.success({} as any);
    const state = reducer({ loading: true, status: {} as any }, action);
    expect(state.loading).toBe(false);
    expect(state.status.success).toBe(true);
  });

  it('should change the status to false for failed action', () => {
    const action = actions.lookupAsync.failure(new Error());
    const state = reducer({ loading: true, status: {} as any }, action);
    expect(state.loading).toBe(false);
    expect(state.status.success).toBe(false);
  });
});
