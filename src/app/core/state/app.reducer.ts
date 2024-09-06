
import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export const initialState = {
  config: null
};

const _appReducer = createReducer(
  initialState,
  on(AppActions.loadAppConfigSuccess, (state, { config }) => ({ ...state, config })),
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
