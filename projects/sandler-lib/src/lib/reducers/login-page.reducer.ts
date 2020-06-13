import { createReducer, on, Action } from "@ngrx/store";

import { loginAction } from './../actions/login-page.actions'

export const initialState = {
    username: '',
    password: ''
};

const _loginReducer = createReducer(initialState,
    on(loginAction, (state, {username, password}) => ({ ...state, username, password})),

);

export function reducer(state: {username: string, password: string}, action: Action) {
    return _loginReducer(state, action);
}