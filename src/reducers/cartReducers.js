import { ADD_TO_CART, DELETE_A_CART_PRODUCT } from "../actions/actionTypes";

const initialState = {
  isEmpty: true,
  totalItems: 0,
  productsInCart: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let newArray = state.productsInCart;
      newArray.push(action.item);
      let items = state.totalItems;
      return {
        ...state,
        isEmpty: false,
        totalItems: items + 1,
        productsInCart: newArray,
      };
    case DELETE_A_CART_PRODUCT:
      let totalitems = state.totalItems;
      let newDeletedArray = state.productsInCart.filter(
        (product) => product.id !== action.id
      );
      return {
        ...state,
        totalItems: totalitems - 1,
        productsInCart: newDeletedArray,
      };
    default:
      return state;
  }
}
