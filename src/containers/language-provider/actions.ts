import { createAction } from 'typesafe-actions';

export const setLocale = createAction(`editor/containers/language-provider/SET_LOCALE`, (locale: string) => locale)();
