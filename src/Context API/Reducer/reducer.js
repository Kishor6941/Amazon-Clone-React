export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // Logic of adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic of remove item from basket
      //we Cloned the basket
      let newBakset = [...state.basket];

      // Here check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in basket, remove it,
        newBakset.splice(index, 1);
      } else {
        console.warn(
          `Can't remve Product (id:${action.id} as its no more in basket)`
        );
      }
      return {
        ...state,
        basket: newBakset,
      };

    default:
      return state;
  }
};

export default reducer;
