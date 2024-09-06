
import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

export const initialState = {
  data: null
};

const _dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboardSuccess, (state, { data }) => ({ ...state, data })),
);

export function dashboardReducer(state, action) {
  return _dashboardReducer(state, action);
}
