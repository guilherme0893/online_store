import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Header from '../components/Header';
import FreeShipping from '../components/FreeShipping';
import SendToCartButton from '../components/SendToCartButton';
import '../styles/ProductDetails.css';
import CommentBox from '../components/CommentBox';

export default class ProductDefails extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      cart: JSON.parse(localStorage.getItem('product')) || [],
      price: 0.00,
      image: '',
      title: '',
      quantity: 0,
      freeShipping: true,
      productId: '',
    };

    this.sendProductToCart = this.sendProductToCart.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount = async () => {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProductsID(id);
    this.setState({ product });

    this.setState({
      title: product.title,
      price: product.price.toFixed(2),
      image: product.pictures[0].secure_url,
      quantity: product.available_quantity,
      freeShipping: product.shipping.free_shipping,
      productId: product.id,
    });
  }

  sendProductToCart() {
    this.setState({
      product: JSON.parse(localStorage.getItem('product')),
    });
  }

  render() {
    const {
      state: { cart,
        price, image, title, quantity, freeShipping, productId, product },
    } = this;
    return (
      <div className="content-product-details">
        <Header cart={ cart } />
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
              <SendToCartButton
                objectProduct={ product }
                productId={ productId }
                testId="product-detail-add-to-cart"
                sendProductToCart={ this.sendProductToCart }
              />
            </div>
            <div>
              <CommentBox />
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
