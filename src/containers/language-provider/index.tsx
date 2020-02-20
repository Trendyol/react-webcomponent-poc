import React from 'react';
import { IntlConfig, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { localeSelector } from './selector';

type Props = {
  messages: { [locale: string]: IntlConfig['messages'] };
  locale: string;
  children?: React.ReactNode;
};

export const LanguageProvider = ({ locale, messages, children }: Props) => (
  <IntlProvider locale={locale!} key={locale} messages={messages[locale!]} onError={() => null}>
    {React.Children.only(children)}
  </IntlProvider>
);

const mapStateToProps = createSelector(localeSelector, locale => ({ locale }));

export default connect(mapStateToProps, {})(LanguageProvider);
