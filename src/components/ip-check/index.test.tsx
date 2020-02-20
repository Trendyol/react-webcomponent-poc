import React, { ComponentProps } from 'react';
import { render } from '@testing-library/react';
import IPCheck from './index';
import IntlProvider from 'react-intl/dist/components/provider';
import { StaticRouter as Router } from 'react-router-dom';

const scope = `editor.components.ip-check`;
const messages = {
  [`${scope}.loadingText`]: 'loading-text',
  [`${scope}.failedText`]: 'failed:{time}',
  [`${scope}.successText`]: 'success:{ip}-{time}',
  [`${scope}.switchButtonText`]: 'switch'
};

const renderComponent = (props: ComponentProps<typeof IPCheck>) =>
  render(
    <IntlProvider locale="en" messages={messages}>
      <Router>
        <IPCheck {...props} />
      </Router>
    </IntlProvider>
  );

describe('<IPCheck />', () => {
  it('should loading should render the loading text', async () => {
    const { container, findByText } = renderComponent({ loading: true, status: null as any });
    expect(container.querySelector('button')).not.toBeNull();
    expect(await findByText('loading-text')).not.toBeNull();
  });

  it('should render status text success', () => {
    const { container } = renderComponent({ loading: false, status: { ip: '127.0.0.1', success: true, time: 73 } });
    const span = container.querySelector('span');

    expect(span).not.toBeNull();
    expect(span!.innerHTML.startsWith('success:127.0.0.1-')).toBe(true);
  });

  it('should render status text failed', () => {
    const { container } = renderComponent({ loading: false, status: { ip: undefined, success: false, time: 73 } });
    const span = container.querySelector('span');

    expect(span).not.toBeNull();
    expect(span!.innerHTML.startsWith('failed:')).toBe(true);
  });
});
