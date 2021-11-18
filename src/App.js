import React, { Component } from 'react';
import Categoryes from './pages/Categoryes';
import * as api from './services/api';

class App extends Component {
  render() {
    // ambos retornando uma promise no console.log -- ok
    // não deixei comentado por causa do lint reclamando
    api.getCategories();
    api.getProductsFromCategoryAndQuery();
    return (
      <div className="App">
        <Categoryes apiGetCategories={ api.getCategories } />
      </div>
    );
  }
}

export default App;
