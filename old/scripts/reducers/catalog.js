function catalog(state = [], action) {
  switch (action.type) {
    case 'LOAD_CATALOG':
      return {
        ...state,
        categories: action.categories,
        items: action.items
      };
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.id
      };
      return state;
    case 'CATALOG_LOADED':
      return {
        ...state,
        catalogLoaded: action.val
      };
    default:
      return state;
  }
}

export default catalog;