import { RootState } from 'MyTypes';
import { createSelector } from 'reselect';
const languageSelector = (state: RootState) => state.language;
export const localeSelector = createSelector(languageSelector, language => language.locale);
