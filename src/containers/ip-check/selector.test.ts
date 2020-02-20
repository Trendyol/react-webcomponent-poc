import { RootState } from 'MyTypes';
import { ipCheckSelector } from './selector';

describe('ip-check@selector', () => {
  describe('ipCheckSelector', () => {
    it('should return the state', () => {
      const ipCheck = {} as any;
      const rootState: Partial<RootState> = { ipCheck };
      expect(ipCheckSelector(rootState as RootState)).toBe(ipCheck);
    });
  });
});
