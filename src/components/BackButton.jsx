import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../images/back-button.svg';

export default class ButtonShoppingCard extends Component {
  render() {
    return (
      <Link to="/">
        <img src={ BackButton } alt="Back button" />
      </Link>
    );
  }
}
