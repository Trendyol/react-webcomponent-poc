import { formatTranslationMessages } from './i18n';

jest.mock('./translations/tr.json', () => ({
  message1: 'default message',
  message2: 'default message 2'
}));

const deTranslationMessages = {
  message1: 'standardnachricht',
  message2: ''
};

describe('i18n', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should build only defaults when DEFAULT_LOCALE', () => {
    const result = formatTranslationMessages('tr', { a: 'a' });

    expect(result).toEqual({ a: 'a' });
  });

  it('should combine default locale and current locale when not DEFAULT_LOCALE', () => {
    const result = formatTranslationMessages('', deTranslationMessages);

    expect(result).toEqual({
      message1: 'standardnachricht',
      message2: 'default message 2'
    });
  });
});
