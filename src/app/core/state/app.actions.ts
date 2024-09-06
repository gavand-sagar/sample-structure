
import { createAction } from '@ngrx/store';

export const loadAppConfig = createAction('[App] Load Config');
export const loadAppConfigSuccess = createAction('[App] Load Config Success');
export const loadAppConfigFailure = createAction('[App] Load Config Failure');
