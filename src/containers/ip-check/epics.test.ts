import { ipLookupEpic, triggerLookupEpic } from './epics';
import { take, toArray } from 'rxjs/operators';
import * as actions from './actions';
import { instance, mock, reset, verify, when } from 'ts-mockito';
import IPAPI from '../../services/ip-api';
import { from, of } from 'rxjs';

describe('ip-check@epics', () => {
  describe('triggerLookupEpic', () => {
    it('should emit lookup request', async () => {
      // Arrange
      const expectedActions = [actions.lookupAsync.request()];
      const trigger$ = triggerLookupEpic(null as any, null as any, null as any);
      // Act
      const result = await trigger$.pipe(take(1), toArray()).toPromise();
      // Assert
      expect(result).toEqual(expectedActions);
    });
  });

  describe('ipLookupEpic', () => {
    const mockIPAPI = mock(IPAPI);
    const ipAPI = instance(mockIPAPI);
    const dependencies = { ip: ipAPI };

    afterEach(() => {
      reset(mockIPAPI);
    });

    it('should call ip api and create action with the result', async () => {
      // Arrange
      const action$: any = from([actions.lookupAsync.request()]);
      const state$: any = of({});
      const epic$ = ipLookupEpic(action$, state$, dependencies);
      const expectedAction = actions.lookupAsync.success({} as any);

      when(mockIPAPI.lookup()).thenResolve({} as any);

      // Act
      const result = await epic$.pipe(toArray()).toPromise();

      // Assert
      expect(result).toEqual([expectedAction]);
      verify(mockIPAPI.lookup()).once();
    });

    it('should call ip api and create action with the error', async () => {
      // Arrange
      const action$: any = from([actions.lookupAsync.request()]);
      const state$: any = of({});
      const epic$ = ipLookupEpic(action$, state$, dependencies);
      const expectedError = new Error('unknown');
      const expectedAction = actions.lookupAsync.failure(expectedError);

      when(mockIPAPI.lookup()).thenReject(expectedError);

      // Act
      const result = await epic$.pipe(toArray()).toPromise();

      // Assert
      expect(result).toEqual([expectedAction]);
      verify(mockIPAPI.lookup()).once();
    });
  });
});
