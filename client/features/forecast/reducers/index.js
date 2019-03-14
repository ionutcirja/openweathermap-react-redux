// @flow
import { handleActions } from 'redux-actions';
import type { Forecast, Action } from '../../../types';
import * as Actions from '../actions';

export default handleActions({
  [Actions.forecastRequest]: () => ({
    loading: true,
    error: false,
  }),
  [Actions.forecastResponse]: (state: Forecast, action: Action) => ({
    loading: false,
    ...action.payload,
  }),
  [Actions.forecastError]: () => ({
    loading: false,
    error: true,
  }),
}, {});
