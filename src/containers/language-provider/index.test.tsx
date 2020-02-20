import React from 'react';
import { render } from '@testing-library/react';
import ConnectedLanguageProvider, { LanguageProvider } from './index';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import reducer from './reducer';

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
    de: 'Dies ist eine standardnachricht'
  }
});

describe('<LanguageProvider />', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    const { container } = render(
      <LanguageProvider messages={messages} locale="de">
        {children}
      </LanguageProvider>
    );
    expect(container.querySelector('h1')).not.toBeNull();
  });
});

describe('<ConnectedLanguageProvider />', () => {
  it('should render a <button> tag', () => {
    const store = createStore(combineReducers({ language: reducer }));
    const { queryByText } = render(
      <Provider store={store}>
        <ConnectedLanguageProvider messages={messages}>
          <FormattedMessage {...messages.someMessage} />
        </ConnectedLanguageProvider>
      </Provider>
    );
    expect(queryByText(messages.someMessage.defaultMessage)).not.toBeNull();
  });
});
