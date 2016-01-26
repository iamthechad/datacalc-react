/*
 * action types
 */

export const LOAD_CATALOG = 'LOAD_CATALOG';
export const CATALOG_LOADED = 'CATALOG_LOADED';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const LOAD_ORDER = 'LOAD_ORDER';

/*
 * action creators
 */

export function loadCatalog(data) {
  return {
    type: LOAD_CATALOG,
    categories: data.categories,
    items: data.items
  }
}

export function catalogLoaded(val) {
  return {
    type: CATALOG_LOADED,
    val
  }
}

export function selectCategory(id) {
  return { type: SELECT_CATEGORY, id }
}

export function addItem(categoryId, id) {
  return { type: ADD_ITEM, categoryId: categoryId, id: id }
}

export function removeItem(categoryId, id) {
  return { type: REMOVE_ITEM, categoryId: categoryId, id : id }
}

export function loadOrder(order) {
  return { type: LOAD_ORDER, order }
}
