// @flow
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchForecast } from '../services';
import type { Action } from '../../../types';
import {
  FORECAST_REQUEST,
  forecastResponse,
  forecastError,
} from '../actions';

export function* requestForecast(action: Action): Generator<*, *, *> {
  const { location } = action.payload;
  try {
    const response = yield call(fetchForecast, location);
    const { city, list } = response.data;
    yield put(forecastResponse({
      location: city,
      list,
    }));
  } catch (error) {
    yield put(forecastError(error));
  }
}

export function* watchForecastRequest(): Generator<*, *, *> {
  yield takeLatest(FORECAST_REQUEST, requestForecast);
}
