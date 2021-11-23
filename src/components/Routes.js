import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDefails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/product/:id" component={ ProductDefails } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
