import React, { Component } from 'react';
import Categoryes from '../components/Categoryes';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';
import '../styles/Home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      products: [],
      noResult: false,
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  async handleSearch() {
    const { query } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', query);

    if (result.results.length > 0) {
      this.setState({
        noResult: false,
        query: '',
        products: result.results,
      });
    } else {
      this.setState({
        noResult: true,
        query: '',
      });
    }
  }

  render() {
    const { query, products, noResult } = this.state;
    return (
      <div>
        <Header />
        <div className="content-cart">
          <Categoryes apiGetCategories={ api.getCategories } />
          <div className="search-products">
            <div className="search-products-input">
              <input
                data-testid="query-input"
                type="text"
                value={ query }
                placeholder="Pesquisar produtos"
                onChange={ this.handleQueryChange }
              />
              <button
                data-testid="query-button"
                type="submit"
                onClick={ this.handleSearch }
              >
                Pesquisar
              </button>
            </div>
            <div className="query-result">
              { noResult ? 'Nenhum produto foi encontrado' : products.map((product) => (
                <ProductCard
                  key={ product.id }
                  title={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                  id={ product.id }
                />
              )) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
