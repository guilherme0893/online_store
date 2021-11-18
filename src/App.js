import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import './App.css';
import * as api from './services/api';

class App extends Component {
  render() {
    // ambos retornando uma promise no console.log -- ok
    // não deixei comentado por causa do lint reclamando
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
