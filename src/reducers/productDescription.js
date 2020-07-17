import { PRODUCT_DESCRIPTION_SUCCESS } from "../actions/actionTypes";

const initialState = {
  product: {},
};

export default function productDescription(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DESCRIPTION_SUCCESS:
      return {
        ...state,
        product: action.product,
      };
    default:
      return {
        ...state,
      };
  }
}
