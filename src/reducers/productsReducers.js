import {
  FETCHING_PRODUCTS,
  GET_PRODUCTS,
  FETCH_PRODUCTS,
  DELETE_A_PRODUCT,
  SORT_BY_PRICE,
  ADD_A_PRODUCT,
  CLEAR_NOTIFICATIONS,
  PRODUCT_DESCRIPTION_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  gotError: false,
  productArray: [],
  sortedInDescending: false,
  showSuccessMessage: false,
  message: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_PRODUCTS:
      return {
        isFetching: false,
        gotError: false,
        productArray: action.data,
      };
    case DELETE_A_PRODUCT:
      let newArray = state.productArray.filter(
        (product) => product.id !== action.id
      );
      return {
        ...state,
        productArray: newArray,
        showSuccessMessage: true,
        message: "Product deleted successfully",
      };
    case SORT_BY_PRICE:
      let newSortedArray = [];
      if (state.sortedInDescending) {
        newSortedArray = state.productArray.sort((a, b) => a.price - b.price);
      } else {
        newSortedArray = state.productArray.sort((a, b) => b.price - a.price);
      }

      return {
        ...state,
        productArray: newSortedArray,
        sortedInDescending: !state.sortedInDescending,
        showSuccessMessage: true,
        message: "Sorting successfull",
      };
    case ADD_A_PRODUCT:
      return {
        ...state,
        productArray: [action.data, ...state.productArray],
        showSuccessMessage: true,
        message: "Added product successfully",
      };
    case CLEAR_NOTIFICATIONS:
      return {
        ...state,
        showSuccessMessage: false,
        message: null,
      };
    default:
      return {
        ...state,
      };
  }
}
