import React, { Component } from "react";
import { addProduct } from "../actions/cartAction";
import { deleteProductFromTotal } from "../actions/productActions";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProduct: false,
      price: this.props.product.price,
      name: this.props.product.name,
      isProductEdited: false,
    };
  }
  addProductToCart = (product) => {
    this.props.dispatch(addProduct(product));
  };
  handleDeleteProduct = (id) => {
    this.props.dispatch(deleteProductFromTotal(id));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  editProduct = () => {
    this.setState({
      editProduct: !this.state.editProduct,
      isProductEdited: true,
    });
  };

  render() {
    console.log(this.props.isInCart);
    console.log("STATE ", this.state);
    const { product, index } = this.props;
    const { price, name } = this.state;
    return (
      <div className="product-carditem">
        <div>
          <Link to={`/product_description/${product.id}`}>
            <img
              src={product.img}
              style={{ height: 100, width: 100, borderColor: "black" }}
              // onClick={this.getTheProductDescription(product.id)}
            />
          </Link>
        </div>
        {this.state.isProductEdited ? (
          <div>
            <div>Price:{this.state.price}</div>
            <div>Name:{this.state.name}</div>
            <div>Quantity:{1}</div>
          </div>
        ) : (
          <div>
            <div>Price:{product.price}</div>
            <div>Name:{product.name}</div>
            <div>Quantity:{1}</div>
          </div>
        )}

        <div>
          <img
            src="https://image.flaticon.com/icons/svg/715/715750.svg"
            style={{ height: 40, width: 40, cursor: "pointer" }}
            onClick={this.editProduct}
          />
          <img
            onClick={() => this.handleDeleteProduct(product.id)}
            src="https://www.flaticon.com/premium-icon/icons/svg/3024/3024530.svg"
            style={{ height: 40, width: 40, cursor: "pointer" }}
          />
        </div>
        {this.state.editProduct ? (
          <form>
            <input
              type="text"
              placeholder="edit price"
              onChange={this.handleChange}
              id="price"
              value={this.state.price}
            />
            <input
              type="text"
              placeholder="edit name"
              onChange={this.handleChange}
              id="name"
              value={this.state.name}
            />
          </form>
        ) : null}
        {this.props.isInCart ? (
          <button onClick={() => this.removeProductFromCart(product)} disabled>
            Added To Cart
          </button>
        ) : (
          <button onClick={() => this.addProductToCart(product)}>
            Add To Cart
          </button>
        )}
      </div>
    );
  }
}

export default Product;
