import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoShoppingCart from '../images/logo-shop-card.svg';

export default class ShoppingCardButton extends Component {
  render() {
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <img src={ LogoShoppingCart } alt="Shopping Card" />
      </Link>
    );
  }
}
