import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </header>
    );
  }
}
