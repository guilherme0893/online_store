import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryesCard extends Component {
  render() {
    const { category, handleCategorySearch, categoryId } = this.props;
    return (
      <button
        type="button"
        className="category-card"
        data-testid="category"
        id={ categoryId }
        onClick={ handleCategorySearch }
      >
        { category }
      </button>
    );
  }
}

CategoryesCard.propTypes = {
  category: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  handleCategorySearch: PropTypes.func.isRequired,
};
