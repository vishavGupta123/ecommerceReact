import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "./actions/productActions";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import ProductDescription from "./components/ProductDescription";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    console.log(this.props);
    const { products } = this.props;
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <Products
                  {...props}
                  products={products}
                  cart={this.props.cart}
                  dispatch={this.props.dispatch}
                  isFetching={products.isFetching}
                />
              );
            }}
          />
          <Route
            path="/addProduct"
            render={(props) => {
              return <AddProduct {...props} dispatch={this.props.dispatch} />;
            }}
          />
          <Route
            path="/cartItems"
            exact
            render={(props) => {
              return (
                <Cart
                  {...props}
                  products={this.props.cart}
                  dispatch={this.props.dispatch}
                />
              );
            }}
          />
          <Route
            path="/product_description/:productId"
            render={(props) => {
              return (
                <ProductDescription {...props} dispatch={this.props.dispatch} />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(store) {
  return {
    products: store.products,
    cart: store.cart,
  };
}

export default connect(mapStateToProps)(App);
