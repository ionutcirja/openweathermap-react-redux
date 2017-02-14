import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as actions from './weather';
import * as api from '../api/fetch';

chai.use(sinonChai);

describe('Weather actions', () => {
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	const sandbox = sinon.sandbox.create();

	describe('getWeatherData', () => {
		afterEach(() => {
			sandbox.restore();
		});

		it('should dispatch an WEATHER_UPDATED action if data is fetched successfully', () => {
			const data = { info: 'some info' };
			const expectedAction = {
				type: 'WEATHER_UPDATED',
				data
			};
			const promise = Promise.resolve(data);
			sandbox.stub(api, 'fetch').returns(promise);
			const store = mockStore({});

			store.dispatch(actions.getWeatherData());
			expect(api.fetch).to.have.been.called; // eslint-disable-line no-unused-expressions
			return promise.then(() => {
				expect(store.getActions()).to.eql([expectedAction]);
			});
		});

		it('should dispatch an WEATHER_UPDATED action if data is not fetched successfully', () => {
			const error = { error: 'message' };
			const expectedAction = {
				type: 'WEATHER_UPDATED',
				data: error
			};
			const promise = Promise.reject(error);
			sandbox.stub(api, 'fetch').returns(promise);
			const store = mockStore({});

			store.dispatch(actions.getWeatherData());
			return promise.then().catch(() => {
				expect(store.getActions()).to.eql([expectedAction]);
			});
		});
	});
});
