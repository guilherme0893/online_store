import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryesCard from './CategoryesCard';
import '../styles/Category.css';

export default class Categoryes extends Component {
  constructor() {
    super();

    this.state = {
      arrayCategoryes: [],
    };
  }

  componentDidMount = () => {
    this.getCategories();
  }

  getCategories = async () => {
    const { apiGetCategories } = this.props;
    const api = await apiGetCategories();
    this.setState({ arrayCategoryes: api });
  }

  render() {
    const {
      props: { handleCategorySearch },
      state: { arrayCategoryes },
    } = this;

    return (
      <div className="categoryes">
        <h1>Categorias</h1>
        <ol>
          {arrayCategoryes.map((category) => (
            <li key={ category.id }>
              <CategoryesCard
                category={ category.name }
                categoryId={ category.id }
                handleCategorySearch={ handleCategorySearch }
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

Categoryes.propTypes = {
  apiGetCategories: PropTypes.func.isRequired,
  handleCategorySearch: PropTypes.func.isRequired,
};
