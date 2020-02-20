import React, { ComponentProps } from 'react';
import { connect } from 'react-redux';
import CounterComponent from '../../components/counter';
import * as actions from './actions';
import { createSelector } from 'reselect';
import { countSelector } from './selector';

type CounterComponentProps = ComponentProps<typeof CounterComponent>;

const dispatchProps = {
  increment: actions.increment,
  decrement: actions.decrement,
  set: actions.set
};

type Props = typeof dispatchProps & {
  count: CounterComponentProps['count'];
};

export const Counter = ({ count, increment, decrement, set }: Props) => (
  <CounterComponent count={count} increment={increment} decrement={decrement} set={() => set(73)} />
);

const mapStateToProps = createSelector(countSelector, count => ({ count }));

export default connect(mapStateToProps, dispatchProps)(Counter);
