import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categoryes from '../components/Categoryes';
import Header from '../components/Header';
import * as api from '../services/api';
import '../styles/Home.css';

class Home extends Component {
  render() {
    // ambos retornando uma promise no console.log -- ok
    // não deixei comentado por causa do lint reclamando
    api.getCategories();
    api.getProductsFromCategoryAndQuery();

    return (
      <div>
        <Header />
        <div className="content-cart">
          <Categoryes apiGetCategories={ api.getCategories } />
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
