import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoShoppingCart from '../images/logo-shop-card.svg';

export default class ShoppingCardButton extends Component {
  render() {
    const { products } = this.props;
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <img src={ LogoShoppingCart } alt="Shopping Card" />
        <span data-testid="shopping-cart-size">{ products.length }</span>
      </Link>
    );
  }
}

ShoppingCardButton.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
