import { createAction } from 'typesafe-actions';

export const increment = createAction(`editor/containers/counter/INCREMENT`)();
export const decrement = createAction(`editor/containers/counter/DECREMENT`)();
export const set = createAction(`editor/containers/counter/SET`, (value: number) => value)();
