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
      state: { arrayCategoryes },
    } = this;
    console.log(arrayCategoryes);

    return (
      <div className="categoryes">
        <h1>Categorias</h1>
        <ol>
          {arrayCategoryes.map((category) => (
            <li key={ category.id }>
              <CategoryesCard category={ category.name } />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

Categoryes.propTypes = {
  apiGetCategories: PropTypes.func.isRequired,
};
