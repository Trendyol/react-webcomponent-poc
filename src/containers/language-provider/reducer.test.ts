import reducer from './reducer';
import * as actions from './actions';

describe('language-provider@reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {} as any);
    expect(state).toEqual({ locale: 'tr' });
  });

  it('should change the locale', () => {
    const state = reducer(undefined, actions.setLocale('de'));
    expect(state).toEqual({ locale: 'de' });
  });
});
