import { createReducer, on } from '@ngrx/store';
import { increment, reset } from './counter.actions';

export const initialState = [
  'http://onet.pl',
  'http://wp.pl',
  'http://interia.pl'
];

// tslint:disable-next-line:variable-name
const _counterReducer = createReducer(initialState,
  on(increment, (state, {url}) => [
    ...state,
    url
  ]),
  // on(decrement, state => state - 1),
  on(reset, () => []),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
