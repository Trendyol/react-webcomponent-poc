const mockIPCheckSelector = jest.fn();
jest.mock('./selector', () => ({
  __esModule: true,
  ipCheckSelector: mockIPCheckSelector
}));

import React from 'react';
import ReactTestRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import IPCheck from './index';

describe('<IPCheck />', () => {
  const mockStore = configureStore([]);

  it('should render and match the snapshot', () => {
    mockIPCheckSelector.mockReturnValue({ loading: true, status: { ip: '127.0.0.1', success: true, time: 173 } });
    // @ts-ignore
    const component = <IPCheck store={mockStore()} />;
    const renderer = ReactTestRenderer.createRenderer();
    renderer.render(component);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
