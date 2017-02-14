/* eslint-disable no-underscore-dangle */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';
import style from './sass/index.scss'; // eslint-disable-line no-unused-vars

const store = initStore({});

render(
	<Provider store={store} />,
	document.getElementById('root')
);
