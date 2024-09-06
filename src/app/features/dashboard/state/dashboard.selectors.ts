
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectDashboardState = createFeatureSelector('dashboard');

export const selectDashboardData = createSelector(
  selectDashboardState,
  (state) => state.data
);
