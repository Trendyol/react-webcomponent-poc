import { RootEpic } from 'MyTypes';
import { from, interval, of } from 'rxjs';
import { catchError, filter, map, startWith, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as actions from './actions';

export const ipLookupEpic: RootEpic = (action$, state$, { ip }) =>
  action$.pipe(
    filter(isActionOf(actions.lookupAsync.request)),
    switchMap(() =>
      from(ip.lookup()).pipe(
        map(response => actions.lookupAsync.success(response)),
        catchError(err => of(actions.lookupAsync.failure(err)))
      )
    )
  );

export const triggerLookupEpic: RootEpic = () =>
  interval(60 * 1000).pipe(
    startWith(null),
    map(() => actions.lookupAsync.request())
  );
