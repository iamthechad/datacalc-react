function addToOrder(state = [], action) {
  return [...state, action.id];
}

function removeFromOrder( state = [], action) {
  const idx = state.indexOf(action.id);
  if (idx !== -1) {
    return [
      ...state.slice(0, idx),
      ...state.slice(idx + 1)
    ];
  }
  return state;
}

function order(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.categoryId]: addToOrder(state[action.categoryId], action)
      };
    case 'REMOVE_ITEM':
      const category = action.categoryId;
      const newState = {
        ...state,
        [category]: removeFromOrder(state[category], action)
      };
      if (newState[category].length === 0) {
        delete newState[category];
      }
      return newState;
    case 'LOAD_ORDER':
      return {
        ...state,
        ...action.order
      };
    default:
      return state;
  }
}

export default order;