import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="ecommerce-logo">
          <Link to="/">
            <img
              src="https://image.flaticon.com/icons/svg/777/777205.svg"
              alt="logo"
            />
            <p> Ecommerce</p>
          </Link>
        </div>

        <div className="add-product">
          <Link to="/addProduct">
            Add a new Product
            <img
              src="https://image.flaticon.com/icons/svg/1828/1828817.svg"
              className="plus-image"
            />
          </Link>
        </div>
        <div className="right-div">
          <Link to="/cartItems">Cart</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
