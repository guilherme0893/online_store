import React, { Component } from 'react';
import * as api from '../services/api';
import ShoppingCardButton from '../components/ShoppingCardButton';
import BackButton from '../components/BackButton';
import FreeShipping from '../components/FreeShipping';
import '../styles/ProductDetails.css';

export default class ProductDefails extends Component {
  constructor() {
    super();
    this.state = {
      // arrayProduct: [],
      price: 0.00,
      image: '',
      title: '',
      quantity: 0,
      freeShipping: true,
    };
  }

  componentDidMount = async () => {
    this.getProduct();
  }

  getProduct = async () => {
    const products = await api.getProductsFromCategoryAndQuery('MLB', 'Playstation 5');
    console.log(products);
    await products.results.map((product) => (
      this.setState({
        title: product.title,
        price: product.price.toFixed(2),
        image: product.thumbnail,
        quantity: product.available_quantity,
        freeShipping: product.shipping.free_shipping,
      })
    ));
  }

  render() {
    const {
      state: { price, image, title, quantity, freeShipping },
    } = this;
    return (
      <div className="content-product-details">
        <header>
          <BackButton />
          <ShoppingCardButton />
        </header>
        <main>
          <h1>{ title }</h1>
          <div className="main-content">
            <img src={ image } alt={ title } />
            <div className="product-detail">
              <h2>Especificações Técnicas</h2>
              <p>{ `R$ ${price}` }</p>
              {freeShipping && <FreeShipping />}
              <p>{ quantity }</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
