import React, { Component } from "react";
import {
  sortProductsByPrice,
  clearNotifications,
} from "../actions/productActions";

import Product from "./Product";

class Products extends Component {
  sortByPrice = () => {
    this.props.dispatch(sortProductsByPrice());
  };
  isProductInCart = (product) => {
    const { cart } = this.props;
    console.log("CARTTT ", cart);
    const index = cart.productsInCart.indexOf(product);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  componentWillUnmount() {
    this.props.dispatch(clearNotifications());
  }
  render() {
    console.log(this.props);
    const { products, isFetching } = this.props;
    return (
      <div>
        {products.showSuccessMessage ? (
          <div className="success-message">{products.message}</div>
        ) : null}
        {isFetching ? <h1>Loading...</h1> : null}
        <h3>TotalCartItems:{this.props.cart.totalItems}</h3>
        <button onClick={this.sortByPrice}>Sort By Price</button>
        {products.productArray.map((product, index) => (
          <Product
            product={product}
            key={index}
            dispatch={this.props.dispatch}
            isInCart={this.isProductInCart(product)}
          />
        ))}
      </div>
    );
  }
}

export default Products;
