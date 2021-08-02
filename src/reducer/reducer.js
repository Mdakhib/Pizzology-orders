const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, basket: [] };

    case "ADD_ITEM":
      return { ...state, basket: [...state.basket, action.payload] };

    default:
      return state;
  }
};

export default reducer;
