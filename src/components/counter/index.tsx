import React from 'react';
import { Link } from 'react-router-dom';
import messages from './messages';
import { FormattedMessage, useIntl } from 'react-intl';

type Props = {
  count: number;
  increment(): void;
  decrement(): void;
  set(): void;
};

const Counter = ({ count, increment, decrement, set }: Props) => {
  const { formatMessage } = useIntl();
  const countText = formatMessage(messages.countText, { count });

  return (
    <div className="counter__container">
      <span>
        <FormattedMessage {...messages.helloText} />
      </span>
      <Link to="/">
        <button>
          <FormattedMessage {...messages.switchButtonText} />
        </button>
      </Link>
      <button onClick={() => increment()}>
        <FormattedMessage {...messages.incrementButtonText} />
      </button>
      <button onClick={() => decrement()}>
        <FormattedMessage {...messages.decrementButtonText} />
      </button>
      <button onClick={() => set()}>
        <FormattedMessage {...messages.setButtonText} />
      </button>
      <span>{countText}</span>
    </div>
  );
};

export default Counter;
