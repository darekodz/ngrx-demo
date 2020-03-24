import { createAction, props } from '@ngrx/store';

export const add = createAction(
    'Add',
    props<{url: string}>()
);

export const reset = createAction('Reset');
