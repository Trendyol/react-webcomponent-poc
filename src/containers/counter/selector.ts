import { RootState } from 'MyTypes';
import { createSelector } from 'reselect';

const counterSelector = (state: RootState) => state.counter;
export const countSelector = createSelector(counterSelector, counter => counter.count);
