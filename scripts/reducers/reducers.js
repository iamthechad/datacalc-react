import { combineReducers } from 'redux';
import { LOAD_CATALOG, CATALOG_LOADED, SELECT_CATEGORY, ADD_ITEM, REMOVE_ITEM, LOAD_ORDER } from '../actions/actions';

const DefaultCatalog = {
  categories: {},
  items: {}
};

function selectedCategory(state = "", action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.id;
    default:
      return state;
  }
}

function catalog(state = DefaultCatalog, action) {
  switch (action.type) {
    case LOAD_CATALOG:
      return Object.assign({}, state, {
        categories: action.categories,
        items: action.items
      });
    default:
      return state;
  }
}

function catalogLoaded(state = false, action) {
  switch (action.type) {
    case CATALOG_LOADED:
      return true;
    default:
      return state;
  }
}

function order(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM:
    {
      let newState = Object.assign({}, state);
      if (newState[action.categoryId]) {
        newState[action.categoryId].push(action.id);
      } else {
        newState[action.categoryId] = [action.id];
      }
      return newState;
    }
    case REMOVE_ITEM:
    {
      let newState = Object.assign({}, state);
      if (newState[action.categoryId]) {
        var idx = newState[action.categoryId].indexOf(action.id);
        if (idx !== -1) {
          newState[action.categoryId].splice(idx, 1);
        }
        if (newState[action.categoryId].length === 0) {
          delete newState[action.categoryId];
        }
      }
      return newState;
    }
    case LOAD_ORDER:
      return Object.assign({}, state, action.order);
    default:
      return state;
  }
}

const dataCalcApp = combineReducers({
  selectedCategory,
  order,
  catalog,
  catalogLoaded
});

export default dataCalcApp;