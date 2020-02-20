import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from './messages';

type StatusProps = { ip?: string; success: boolean; time: number };

type Props = {
  loading: boolean;
  status: StatusProps;
};

const Loading = () => (
  <span>
    <FormattedMessage {...messages.loadingText} />
  </span>
);

const StatusComponent = ({ ip, success, time }: StatusProps) => {
  const message = success ? messages.successText : messages.failedText;
  const { formatMessage, formatTime } = useIntl();
  const timeText = formatTime(time);
  const text = formatMessage(message, { ip, time: timeText });

  return <span>{text}</span>;
};

const IPCheck = ({ loading, status }: Props) => (
  <div className="ip-check__container">
    {loading ? <Loading /> : <StatusComponent {...status} />}
    <Link to={'/counter'}>
      <button>
        <FormattedMessage {...messages.switchButtonText} />
      </button>
    </Link>
  </div>
);

export default IPCheck;
