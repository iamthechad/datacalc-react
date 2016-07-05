import { createStore, compose } from 'redux';

import rootReducer from './reducers/index';

const defaultState = {
  catalog: {
    categories: {},
    items: {},
    selectedCategory: '',
    loaded: false
  },
  order: {}
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

/*if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const newRootReducer = require('./reducers/reducers').default;
    store.replaceReducer(newRootReducer);
  })
}*/

export default store;