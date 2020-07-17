import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../actions/cartAction";

class Cart extends Component {
  removeProduct = (id) => {
    this.props.dispatch(deleteProduct(id));
  };
  render() {
    console.log("This Is the Cart Props  ", this.props);
    const products = this.props.products.productsInCart;
    return (
      <div>
        {this.props.products.totalItems === 0 ? (
          <h1>The cart is empty</h1>
        ) : null}
        <h2>Products in The Cart </h2>
        {products.map((product, index) => (
          <div className="product-carditem" key={index}>
            <div>
              <img src={product.img} style={{ height: 70, width: 70 }} />
            </div>
            <div>
              <div>Price:{product.price}</div>
              <div>Name:{product.name}</div>
              <div>Quantity:{1}</div>
            </div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => this.removeProduct(product.id)}
            >
              Remove From cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
