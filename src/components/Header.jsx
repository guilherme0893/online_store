import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCardButton from './ShoppingCardButton';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    const { cart } = this.props;
    return (
      <header className="header-home">
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <ShoppingCardButton products={ cart } />
      </header>
    );
  }
}

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
