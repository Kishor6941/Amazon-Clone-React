export const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "ADD_TO_BASKET":
      // Logic of adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic of remove item from basket
      return { state };

    default:
      return state;
  }
};

export default reducer;
