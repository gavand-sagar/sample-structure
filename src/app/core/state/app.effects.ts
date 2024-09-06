
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  loadConfig$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.loadAppConfig),
    mergeMap(() => of({ config: 'sample-config' }).pipe(
      map(config => AppActions.loadAppConfigSuccess({ config })),
      catchError(() => of(AppActions.loadAppConfigFailure()))
    ))
  ));

  constructor(private actions$: Actions) {}
}
