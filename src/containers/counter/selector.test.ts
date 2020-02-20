import { RootState } from 'MyTypes';
import { countSelector } from './selector';

describe('counter@reducer', () => {
  describe('countSelector', () => {
    it('should return count', () => {
      const state: Partial<RootState> = { counter: { count: 73 } };
      expect(countSelector(state as RootState)).toBe(73);
    });
  });
});
