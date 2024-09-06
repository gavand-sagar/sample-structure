
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  loadAuth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loadAuth),
    mergeMap(() => of({ data: 'sample-data' }).pipe(
      map(data => AuthActions.loadAuthSuccess({ data })),
      catchError(() => of(AuthActions.loadAuthFailure()))
    ))
  ));

  constructor(private actions$: Actions) {}
}
