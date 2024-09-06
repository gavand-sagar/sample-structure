
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector('auth');

export const selectAuthData = createSelector(
  selectAuthState,
  (state) => state.data
);
