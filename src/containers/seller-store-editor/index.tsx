import React, { FC } from 'react';
import { connect } from 'react-redux';
import * as languageActions from '../language-provider/actions';
import SellerStoreEditorComponent from '../../components/seller-store-editor';
import { Route, Switch } from 'react-router-dom';
import IPCheck from '../ip-check';
import Counter from '../counter';
import { appLocales } from '../../i18n';
import { localeSelector } from '../language-provider/selector';
import { createSelector } from 'reselect';

const dispatchProps = {
  setLocale: languageActions.setLocale
};

type PropsFromState = {
  locale: string;
};

type Props = typeof dispatchProps & PropsFromState;

export const SellerStoreEditor: FC<Props> = ({ locale, setLocale }) => {
  return (
    <SellerStoreEditorComponent>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/">
          <IPCheck />
        </Route>
      </Switch>
      <button onClick={() => setLocale(getNextLocale(locale))}>Locale: {locale}</button>
    </SellerStoreEditorComponent>
  );
};

const mapStateToProps = createSelector(localeSelector, locale => ({ locale }));

function getNextLocale(locale: string) {
  const idx = appLocales.indexOf(locale);
  const nextIdx = idx === -1 ? 0 : (idx + 1) % appLocales.length;
  return appLocales[nextIdx];
}

export default connect(mapStateToProps, dispatchProps)(SellerStoreEditor);
