import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryesCard from './CategoryesCard';

export default class CategoryesList extends Component {
  render() {
    const { props: { arrayCategoryes } } = this;
    return (
      <ol>
        { arrayCategoryes.map((category) => (
          <li key={ category.id }>
            <CategoryesCard category={ category.name } />
          </li>
        )) }
      </ol>
    );
  }
}

CategoryesList.propTypes = {
  arrayCategoryes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
