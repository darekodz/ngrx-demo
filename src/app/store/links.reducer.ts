import { createReducer, on } from '@ngrx/store';
import { add, reset } from './links.actions';

export interface Link {
  name: string;
  url: string;
  description: string;
}

export const initialState: Link[] = [
  {
    name: 'onet',
    url: 'http://onet.pl',
    description: 'dasdsadasdasdas a das dsa  sa sa as asd'
  },
  {
    name: 'wp',
    url: 'http://wp.pl',
    description: 'sjfhisdfhisd   siiosd ji iosjhsdio io siio isd jif'
  },
  {
    name: 'interia',
    url: 'http://interia.pl',
    description: 'skjdhfsdjfsd osd oso ijhs joisd ji sdjf dsoj o'
  }
];

const linksReducerTmp = createReducer(initialState,
  on(add, (state, link) => [
    ...state,
    link
  ]),
  on(reset, () => []),
);

export function linksReducer(state: Link[], action) {
  return linksReducerTmp(state, action);
}
