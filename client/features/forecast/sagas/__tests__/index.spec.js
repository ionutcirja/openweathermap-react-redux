import { call, takeLatest, put } from 'redux-saga/effects';
import * as services from '../../services';
import * as sagas from '..';

describe('Forecast sagas', () => {
  describe('watchStoriesRequest', () => {
    it('should wait for a FORECAST_REQUEST action', () => {
      const generator = sagas.watchForecastRequest();
      expect(generator.next().value).toEqual(
        takeLatest('FORECAST_REQUEST', sagas.requestForecast),
      );
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('requestForecast', () => {
    it('should call fetchForecast services method and'
      + ' dispatch a FORECAST_RESPONSE action in case of success', () => {
      const data = {
        city: {
          name: 'London',
        },
        list: ['1', '2', '3'],
      };
      const generator = sagas.requestForecast({ payload: { location: 'london' } });
      expect(generator.next().value).toEqual(call(services.fetchForecast, 'london'));
      expect(generator.next({ data }).value).toEqual(
        put({
          type: 'FORECAST_RESPONSE',
          payload: {
            location: data.city,
            list: data.list,
          },
        }),
      );
      expect(generator.next().done).toEqual(true);
    });

    it('should call fetchForecast services method and'
      + ' dispatch a FORECAST_ERROR action in case of error', () => {
      const error = { message: 'error' };
      const generator = sagas.requestForecast({ payload: { location: 'london' } });
      expect(generator.next().value).toEqual(call(services.fetchForecast, 'london'));
      expect(generator.throw(error).value).toEqual(
        put({
          type: 'FORECAST_ERROR',
          payload: error,
        }),
      );
      expect(generator.next().done).toEqual(true);
    });
  });
});
