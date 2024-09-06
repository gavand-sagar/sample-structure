
import { createAction } from '@ngrx/store';

export const loadAuth = createAction('[Auth] Load');
export const loadAuthSuccess = createAction('[Auth] Load Success');
export const loadAuthFailure = createAction('[Auth] Load Failure');
