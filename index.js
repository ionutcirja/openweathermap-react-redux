/* eslint-disable no-underscore-dangle */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';
import { getWeatherData } from './actions/weather';
import style from './sass/index.scss'; // eslint-disable-line no-unused-vars
import Forecast from './containers/forecast';

const store = initStore({});
store.dispatch(getWeatherData());

render(
	<Provider store={store}>
		<Forecast />
	</Provider>,
	document.getElementById('root')
);
