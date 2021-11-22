import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDefails from '../pages/ProductDetails';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/product/:id" component={ ProductDefails } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
