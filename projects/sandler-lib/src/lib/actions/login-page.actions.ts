import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
    '[Login Page] Login',
    props<MyAction>()
);

export interface MyAction {
    username: string;
    password: string
}