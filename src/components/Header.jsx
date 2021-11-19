import React, { Component } from 'react';
import ShoppingCardButton from './ShoppingCardButton';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header-home">
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <ShoppingCardButton />
      </header>
    );
  }
}
