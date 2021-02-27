/*
 * action types
 */

/*
 * action creators
 */

export function loadCatalog(data) {
  return {
    type: 'LOAD_CATALOG',
    categories: data.categories,
    items: data.items
  }
}

export function catalogLoaded(val) {
  return {
    type: 'CATALOG_LOADED',
    val
  }
}

export function selectCategory(id) {
  return { 
    type: 'SELECT_CATEGORY',
    id 
  }
}

export function addItem(categoryId, id) {
  return { 
    type: 'ADD_ITEM',
    categoryId, 
    id 
  }
}

export function removeItem(categoryId, id) {
  return { 
    type: 'REMOVE_ITEM',
    categoryId, 
    id 
  }
}

export function loadOrder(order) {
  return { 
    type: 'LOAD_ORDER',
    order 
  }
}
