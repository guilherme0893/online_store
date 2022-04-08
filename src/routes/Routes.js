import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductsCategory from '../pages/ProductsCategory';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import PageNotFound from '../pages/PageNotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/products/category/:id" component={ ProductsCategory } />
      <Route exact path="/products/:id" component={ ProductDetail } />
      <Route exact path="/checkout" component={ Checkout } />
      <Route component={ PageNotFound } />
    </Switch>
  );
}

export default Routes;
