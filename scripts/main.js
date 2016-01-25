import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import dataCalcApp from './reducers/reducers';

let store = createStore(dataCalcApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#main')
);