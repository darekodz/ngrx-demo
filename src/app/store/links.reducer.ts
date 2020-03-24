import { createReducer, on } from '@ngrx/store';
import { add, reset } from './links.actions';

export const initialState = [
  'http://onet.pl',
  'http://wp.pl',
  'http://interia.pl'
];

// tslint:disable-next-line:variable-name
const _linksReducer = createReducer(initialState,
  on(add, (state, {url}) => [
    ...state,
    url
  ]),
  // on(decrement, state => state - 1),
  on(reset, () => []),
);

export function linksReducer(state, action) {
  return _linksReducer(state, action);
}
