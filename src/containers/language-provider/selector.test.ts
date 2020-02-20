import { RootState } from 'MyTypes';
import { localeSelector } from './selector';

describe('language-provider@selector', () => {
  describe('localeSelector', () => {
    it('should return the locale', () => {
      const state: Partial<RootState> = { language: { locale: 'test' } };
      expect(localeSelector(state as RootState)).toBe('test');
    });
  });
});
