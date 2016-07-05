import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import dataCalcApp from './reducers/reducers';

const store = createStore(dataCalcApp);

const mainApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(mainApp, document.querySelector('#main'));