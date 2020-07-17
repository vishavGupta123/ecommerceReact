import { combineReducers } from "redux";

import products from "./productsReducers";
import cart from "./cartReducers";
import productDescription from "./productDescription";
export default combineReducers({
  products,
  cart,
  productDescription,
});
