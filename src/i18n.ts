/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
import trTranslationMessages from './translations/tr.json';
import deTranslationMessages from './translations/de.json';

export const DEFAULT_LOCALE = 'tr';
export const appLocales = ['tr', 'de'];

export const formatTranslationMessages = (locale: string, messages: any) => {
  const defaultFormattedMessages: any =
    locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, trTranslationMessages) : {};
  const flattenFormattedMessages = (formattedMessages: any, key: string) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  tr: formatTranslationMessages('tr', trTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages)
};
