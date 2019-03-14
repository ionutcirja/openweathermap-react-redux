// @flow
import { fork, all } from 'redux-saga/effects';
import { watchForecastRequest } from '../features/forecast/sagas';

export default function* (): Generator<*, *, *> {
  yield all([
    fork(watchForecastRequest),
  ]);
}
