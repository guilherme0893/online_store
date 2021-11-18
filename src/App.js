import React, { Component } from 'react';
import './App.css';
import * as api from './services/api';

class App extends Component {
  render() {
    // ambos retornando uma promise no console.log -- ok
    // não deixei comentado por causa do lint reclamando
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
    return (
      <div className="App">
        Frontend Online Store
      </div>
    );
  }
}

export default App;
