const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, basket: [] };

    case "ADD_ITEM":

      return { ...state, basket: [...state.basket, action.payload] };

    case "REMOVE_ITEM":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("Cant remove item pls try again");
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
