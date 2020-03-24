import { createAction, props, State } from '@ngrx/store';
import { Link } from './links.reducer';

export const add = createAction(
    'Add',
    props<Link>()
);

export const reset = createAction('Reset');
