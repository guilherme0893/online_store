import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class CategoryesCard extends Component {
  render() {
    const { category } = this.props;
    return (
      <button type="button" data-testid="category">{ category }</button>
    );
  }
}

CategoryesCard.propTypes = {
  category: PropTypes.string.isRequired,
};
