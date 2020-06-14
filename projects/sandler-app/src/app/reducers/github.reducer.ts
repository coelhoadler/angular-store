import { createReducer, on } from "@ngrx/store";

import { store } from './../actions/github.actions'

export const initialErrorState = {};

const _githubReducer = createReducer(initialErrorState,
    on(store, (state, data) => ({...state, ...data})),
);

export function githubReducer(state, action) {
    return _githubReducer(state, action);
}