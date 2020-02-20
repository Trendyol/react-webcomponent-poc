const mockLocaleSelector = jest.fn();
jest.mock('../language-provider/selector', () => ({
  __esModule: true,
  localeSelector: mockLocaleSelector
}));

import React from 'react';
import ConnectedSellerStoreEditor, { SellerStoreEditor } from './index';
import ReactTestRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<SellerStoreEditor />', () => {
  afterEach(() => {
    mockLocaleSelector.mockReset();
  });

  it('connected component should render and match the snapshot', () => {
    mockLocaleSelector.mockReturnValue('de');
    // @ts-ignore
    const component = <ConnectedSellerStoreEditor store={mockStore()} />;
    const renderer = ReactTestRenderer.createRenderer();
    renderer.render(component);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('container should render and match the snapshot', () => {
    const props: any = {
      locale: 'tr',
      setLocale: () => undefined
    };
    const component = <SellerStoreEditor {...props} />;
    const renderer = ReactTestRenderer.createRenderer();
    renderer.render(component);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
