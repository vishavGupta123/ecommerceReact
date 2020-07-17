import { ADD_TO_CART, DELETE_A_CART_PRODUCT } from "./actionTypes";

export function addProduct(product) {
  return {
    type: ADD_TO_CART,
    item: product,
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_A_CART_PRODUCT,
    id: id,
  };
}
