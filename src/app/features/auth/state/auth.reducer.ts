
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const initialState = {
  data: null
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.loadAuthSuccess, (state, { data }) => ({ ...state, data })),
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
