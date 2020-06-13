import { createAction } from '@ngrx/store';

export const notFound = createAction('[Error component] notFound');
export const reset = createAction('[Error component] resetError');
export const internalError = createAction('[Error component] InternalError');
