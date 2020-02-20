import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { render, unmountComponentAtNode } from 'react-dom';
// @ts-ignore
import root from 'react-shadow';
import SellerStoreEditorContainer from './containers/seller-store-editor';
import { Provider } from 'react-redux';
// @ts-ignore
import styles from './components/index.scss';
import LanguageProvider from './containers/language-provider';
import { translationMessages } from './i18n';
import { history, store } from './store';

export default class SellerStoreEditorWebComponent extends HTMLElement {
  private readonly observer: MutationObserver;

  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  private update() {
    this.unmount();
    this.mount();
  }

  private mount() {
    render(this.getComponent(), this);
  }

  private unmount() {
    unmountComponentAtNode(this);
  }

  private getComponent() {
    return (
      <root.div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <LanguageProvider messages={translationMessages}>
              <SellerStoreEditorContainer />
            </LanguageProvider>
          </ConnectedRouter>
        </Provider>
        <style type="text/css">{styles}</style>
      </root.div>
    );
  }
}
