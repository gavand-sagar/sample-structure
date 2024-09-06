
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import * as DashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  loadDashboard$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.loadDashboard),
    mergeMap(() => of({ data: 'sample-data' }).pipe(
      map(data => DashboardActions.loadDashboardSuccess({ data })),
      catchError(() => of(DashboardActions.loadDashboardFailure()))
    ))
  ));

  constructor(private actions$: Actions) {}
}
