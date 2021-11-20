import React, { Component } from 'react';
import Categoryes from '../components/Categoryes';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      products: [],
      noResult: false,
      arrayProduct: [],
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sendProductToCart = this.sendProductToCart.bind(this);
    this.handleCategorySearch = this.handleCategorySearch.bind(this);
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

  async handleCategorySearch(event) {
    const result = await api.getProductsFromCategoryAndQuery(event.target.id, '');
    this.setState({
      products: result.results,
    });
  }

  sendProductToCart(event) {
    // seguindo a aula 11.2
    this.setState((prevState) => ({
      arrayProduct: [...prevState.arrayProduct, event.target.id],
    }));
    const { arrayProduct } = this.state;
    console.log(arrayProduct);
  }

  render() {
    const { query, products, noResult } = this.state;
    return (
      <div>
        <Header />
        <div className="content-cart">
          <Categoryes
            apiGetCategories={ api.getCategories }
            handleCategorySearch={ this.handleCategorySearch }
          />
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
