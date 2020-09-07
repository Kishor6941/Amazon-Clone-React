export const initialState = {
  basket: [
    {
      id: "1234",
      title:
        "Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)",
      price: 250,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61Z4fxBfkVL._AC_UY218_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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
