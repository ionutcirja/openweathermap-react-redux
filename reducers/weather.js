import * as actionTypes from '../constants/action-types';

export default function weather(state = {}, action) {
	switch (action.type) {

		case actionTypes.WEATHER_UPDATED:
			return Object.assign({}, state, { ...action.data });

		default:
			return state;
	}
}
