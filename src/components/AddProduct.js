import React, { Component } from "react";
import { handleSubmitForm } from "../actions/productActions";
import { Redirect } from "react-router-dom";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      img: "",
      price: "",
      productAdded: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // componentWillUnmount() {
  //   this.props.dispatch(removeAddedProductState());
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("HEYYYY");
    const { name, description, price, img } = this.state;

    this.props.dispatch(handleSubmitForm(name, description, price, img));
    this.setState({
      productAdded: true,
    });
  };

  render() {
    console.log(this.state);
    if (this.state.productAdded) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="new-product-form">
          <div>
            <input
              type="text"
              placeholder="Product name"
              onChange={this.handleChange}
              id="name"
              value={this.state.name}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="product description"
              onChange={this.handleChange}
              id="description"
              value={this.state.description}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="img url"
              onChange={this.handleChange}
              id="img"
              value={this.state.img}
            />
          </div>
          <div>
            <input
              type="price"
              placeholder="price"
              onChange={this.handleChange}
              id="price"
              value={this.state.price}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;
