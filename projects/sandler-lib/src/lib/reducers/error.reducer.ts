import { createReducer, on } from "@ngrx/store";

import { notFound, reset, internalError } from './../actions/error.actions'

export const initialErrorState = 100;

const _errorReducer = createReducer(initialErrorState,
    on(notFound, state => 404),
    on(reset, state => 100),
    on(internalError, state => 501)
);

export function errorReducer(state, action) {
    return _errorReducer(state, action);
}