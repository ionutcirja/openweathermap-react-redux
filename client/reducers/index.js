import { combineReducers } from 'redux';
import forecast from '../features/forecast/reducers';

export default combineReducers({
  forecast,
});
