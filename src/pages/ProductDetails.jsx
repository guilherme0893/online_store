import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { match: { params: { id } } } = this.props;
    const products = await api.getProductsID(id);
    this.setState({ arryaProduct: [products] });
    const { arryaProduct } = this.state;

    arryaProduct.map((product) => (
      this.setState({
        title: product.title,
        price: product.price.toFixed(2),
        image: product.pictures[0].secure_url,
        quantity: product.available_quantity,
        freeShipping: product.shipping.free_shipping,
      })
    ));
  }

  render() {
    const {
      state: { price, image, title, quantity, freeShipping, arryaProduct },
    } = this;
    console.log(arryaProduct);

    return (
      <div className="content-product-details">
        <header>
          <BackButton />
          <ShoppingCardButton />
        </header>
        <main>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <div className="main-content">
            <div className="product-image">
              <img src={ image } alt={ title } />
            </div>
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

ProductDefails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
