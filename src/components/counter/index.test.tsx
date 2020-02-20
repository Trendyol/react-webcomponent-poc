import React, { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import Counter from './index';
import IntlProvider from 'react-intl/dist/components/provider';
import { StaticRouter as Router } from 'react-router-dom';

const scope = `editor.components.counter`;
const messages = {
  [`${scope}.helloText`]: 'hello-text',
  [`${scope}.switchButtonText`]: 'switch-button',
  [`${scope}.incrementButtonText`]: 'increment-button',
  [`${scope}.decrementButtonText`]: 'decrement-button',
  [`${scope}.setButtonText`]: `set-button`,
  [`${scope}.countText`]: 'count:{count}'
};

const renderComponent = (props: Partial<ComponentProps<typeof Counter>> = {}) =>
  render(
    <IntlProvider locale="en" messages={messages}>
      <Router>
        <Counter {...(props as any)} />
      </Router>
    </IntlProvider>
  );

describe('<Counter />', () => {
  it('should render four <button> tags', () => {
    const { container } = renderComponent();

    expect(container.querySelectorAll('button').length).toBe(4);
  });

  it('should render the given count in <span> tag', async () => {
    const { findByText } = renderComponent({ count: 73 });
    expect(await findByText('count:73')).not.toBeNull();
  });

  it('should call increment when increment button is clicked', async () => {
    const onIncrementSpy = jest.fn();
    const { findByText } = renderComponent({ increment: onIncrementSpy });

    fireEvent.click(await findByText('increment-button')!);

    expect(onIncrementSpy).toHaveBeenCalledTimes(1);
  });

  it('should call decrement when decrement button is clicked', async () => {
    const onDecrementSpy = jest.fn();
    const { findByText } = renderComponent({ decrement: onDecrementSpy });

    fireEvent.click(await findByText('decrement-button')!);

    expect(onDecrementSpy).toHaveBeenCalledTimes(1);
  });

  it('should call set when set button is clicked', async () => {
    const onSetSpy = jest.fn();
    const { findByText } = renderComponent({ set: onSetSpy });

    fireEvent.click(await findByText('set-button')!);

    expect(onSetSpy).toHaveBeenCalledTimes(1);
  });
});
