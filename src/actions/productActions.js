import {
  FETCHING_PRODUCTS,
  FETCH_PRODUCTS,
  ERROR_ACTION,
  DELETE_A_PRODUCT,
  SORT_BY_PRICE,
  ADD_A_PRODUCT,
  CLEAR_NOTIFICATIONS,
} from "./actionTypes";

import { NotificationManager } from "react-notifications";

export function gettingProducts() {
  return {
    type: FETCHING_PRODUCTS,
  };
}

export function fetchProducts() {
  return (dispatch, getState) => {
    dispatch(gettingProducts());
    console.log("HEYYY");
    fetch(
      `https://my-json-server.typicode.com/vishavGupta123/cartdatabase/products`
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "Not found") {
          throw new Error("No product found");
        } else {
          console.log("YOOO");
          console.log(data);
          dispatch(getProducts(data));
          NotificationManager.success(
            "Successfully fetched all the data ",
            2000
          );
        }
      })
      .catch((err) => dispatch(error_received()));
  };
}

export function getProducts(products) {
  console.log(products);
  return {
    type: FETCH_PRODUCTS,
    data: products,
  };
}

export function error_received() {
  return {
    type: ERROR_ACTION,
    message: "ITS IS AN ERROR",
  };
}

export function deleteProductFromTotal(id) {
  return {
    type: DELETE_A_PRODUCT,
    id: id,
  };
}

export function sortProductsByPrice() {
  return {
    type: SORT_BY_PRICE,
  };
}

export function handleSubmitForm(name, description, price, img) {
  const newProduct = JSON.stringify({
    name: name,
    description: description,
    price: price,
    img: img,
  });
  return function (dispatch) {
    fetch(
      "https://my-json-server.typicode.com/vishavGupta123/cartdatabase/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newProduct,
      }
    )
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("New Data ", data);
        dispatch(addingTheNewProduct(data));
      });
  };
  console.log(newProduct);
}

export function addingTheNewProduct(data) {
  return {
    type: ADD_A_PRODUCT,
    data,
  };
}

export function clearNotifications() {
  return {
    type: CLEAR_NOTIFICATIONS,
  };
}
