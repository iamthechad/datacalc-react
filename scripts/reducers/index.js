import { combineReducers } from 'redux';

import catalog from './catalog';
import order from './order';

const rootReducer = combineReducers({
  catalog,
  order
});

export default rootReducer;