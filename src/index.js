import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import store from './store';

import './css/style.css';

const mainApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(mainApp, document.querySelector('#main'));