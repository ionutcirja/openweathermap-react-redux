// @flow
import { createAction } from 'redux-actions';

export const FORECAST_REQUEST: string = 'FORECAST_REQUEST';
export const FORECAST_RESPONSE: string = 'FORECAST_RESPONSE';
export const FORECAST_ERROR: string = 'FORECAST_ERROR';

export const forecastRequest = createAction(FORECAST_REQUEST);
export const forecastResponse = createAction(FORECAST_RESPONSE);
export const forecastError = createAction(FORECAST_ERROR);
