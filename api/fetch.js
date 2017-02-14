import { get } from './';
import * as endpoints from '../constants/endpoints';

export function fetch() {
	return get(endpoints.FETCH_WEATHER_URL);
}
