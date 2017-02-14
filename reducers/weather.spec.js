import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import reducer from './weather';

describe('Weather reducer', () => {
	it('should return the default state if the action type is not defined', () => {
		const initialState = { someProp: 'some value' };
		deepFreeze(initialState);
		expect(reducer(initialState, { type: 'UNDEFINED_ACTION' })).to.eql(initialState);
	});

	it('should return a new state containing the forecast data if the action type is WEATHER_UPDATED', () => {
		const initialState = {
			loaded: false
		};
		const data = {
			info: 'some info',
			loaded: true
		};
		deepFreeze(initialState);
		expect(reducer(initialState, { type: 'WEATHER_UPDATED', data })).to.eql({
			info: 'some info',
			loaded: true
		});
	});
});
