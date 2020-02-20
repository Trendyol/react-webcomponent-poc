import React, { ComponentProps } from 'react';
import { render } from '@testing-library/react';
import SellerStoreEditorComponent from './index';
import IntlProvider from 'react-intl/dist/components/provider';
import { StaticRouter as Router } from 'react-router-dom';

const renderComponent = (props: Partial<ComponentProps<typeof SellerStoreEditorComponent>> = {}) =>
  render(
    <IntlProvider locale="en">
      <Router>
        <SellerStoreEditorComponent {...(props as any)} />
      </Router>
    </IntlProvider>
  );

describe('<SellerStoreEditor />', () => {
  it('should render with .editor class', () => {
    const { container } = renderComponent();

    expect(container.firstElementChild).not.toBeNull();
    expect(container.firstElementChild?.className).toEqual('editor');
  });

  it('should render the given children', () => {
    const childElement = <span>hello</span>;
    const { container } = renderComponent({ children: childElement });

    expect(container.querySelector('span')).not.toBeNull();
  });
});
