/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import config from './config';
import initAxios from './config/axios';
import createStore from './store';
import rootSaga from './sagas';
import theme from './style/theme';
import GlobalStyle from './style';
import Forecast from './features/forecast/containers/root';

initAxios({
  baseUrl: config.API_BASE_URL,
});

const initialData = {};
const store = createStore(initialData, window.__NODE_ENV__ !== 'production');
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Forecast />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
