import { PRODUCT_DESCRIPTION_SUCCESS, FETCH_THE_PRODUCT } from "./actionTypes";

export function productDescriptionSuccess(product) {
  return {
    type: PRODUCT_DESCRIPTION_SUCCESS,
    product,
  };
}

export function startProductFetching() {
  return {
    type: FETCH_THE_PRODUCT,
  };
}

export function fetchProductData(id, products) {
  return function (dispatch) {
    console.log("PRODUCTS ", products);
    let product = products.productArray.filter((product) => product.id === id);
    dispatch(productDescriptionSuccess(product[0]));
  };
}
