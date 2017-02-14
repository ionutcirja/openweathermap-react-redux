import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export function initStore(initialData) {
	const middleware = [thunk, logger()];

	return createStore(
		reducer,
		initialData,
		applyMiddleware(...middleware)
	);
}

