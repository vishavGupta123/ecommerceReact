import React, { Component } from "react";
import { fetchProductData } from "../actions/description";
import { connect } from "react-redux";

class ProductDescription extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (match.params.productId) {
      //dispatch an action
      console.log(this.props);
      this.props.dispatch(
        fetchProductData(match.params.productId, this.props.products)
      );
    }
  }

  render() {
    const product = this.props.productDescription.product;
    console.log("PRODUCT ", product);
    const {
      match: { params },
    } = this.props;
    console.log("this.props ", params);
    return (
      <div>
        <div>
          <img
            src={product.img}
            style={{
              width: 300,
              height: 250,
            }}
            className="product-description"
          />
        </div>
        <div>Price:{product.price}</div>
        <div>
          <button>Add To Cart</button>
        </div>
        <div>Description:{product.description}</div>
      </div>
    );
  }
}

function mapStateToProps({ productDescription, products }) {
  return {
    productDescription,
    products,
  };
}

export default connect(mapStateToProps)(ProductDescription);
