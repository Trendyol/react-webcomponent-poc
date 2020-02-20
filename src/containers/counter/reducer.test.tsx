import reducer from './reducer';
import * as actions from './actions';

describe('counter@reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {} as any);
    expect(state).toEqual({ count: 0 });
  });

  it('should increment the count', () => {
    const state = reducer({ count: 1 }, actions.increment());
    expect(state).toEqual({ count: 2 });
  });

  it('should decrement the count', () => {
    const state = reducer({ count: 1 }, actions.decrement());
    expect(state).toEqual({ count: 0 });
  });

  it('should set the count', () => {
    const state = reducer({ count: 1 }, actions.set(73));
    expect(state).toEqual({ count: 73 });
  });
});
