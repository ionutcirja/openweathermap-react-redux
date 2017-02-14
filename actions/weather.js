/* eslint-disable arrow-body-style */
import * as api from '../api/fetch';
import * as actionTypes from '../constants/action-types';

export function getWeatherData() {
	return (dispatch) => {
		return api.fetch('weather')
			.then((data) => {
				dispatch({ type: actionTypes.WEATHER_UPDATED, data });
			})
			.catch((error) => {
				dispatch({ type: actionTypes.WEATHER_UPDATED, data: error });
			});
	};
}
