import React, { Component } from 'react';
import Free from '../images/free-shopping.svg';
import '../styles/FreeShopping.css';

export default class FreeShipping extends Component {
  render() {
    return (
      <div className="free-shipping">
        <img
          src={ Free }
          alt="Back button"
          className="free-trunck"
        />
        <span>Frete grátis</span>
      </div>
    );
  }
}
