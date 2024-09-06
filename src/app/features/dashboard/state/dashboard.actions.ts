
import { createAction } from '@ngrx/store';

export const loadDashboard = createAction('[Dashboard] Load');
export const loadDashboardSuccess = createAction('[Dashboard] Load Success');
export const loadDashboardFailure = createAction('[Dashboard] Load Failure');
