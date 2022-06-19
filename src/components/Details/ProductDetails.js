/* eslint-disable react/jsx-max-depth */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import ProductAmountMessage from './ProductAmountMessage';
import SendToCartButton from '../Home/SendToCartButton';
import ShippingMessage from './ShippingMessage';

function ProductDetail(props) {
  const { title, price, thumbnail, available_quantity, shipping, id } = props;

  return (
    <div className="col-12 col-md-6 col-lg-4 m-lg-auto md-m-auto">
      <div
        className="card d-flex flex-row rounded
          overflow-hidden m-2"
        style={ {
          backgroundColor: 'RGB(232, 232, 228)',
        } }
      >
        <div
          className="d-lg-flex
           md-align-items-center align-items-center card-body"
        >
          <img
            className="img-thumbnail rounded d-block border border-dark card-img-top"
            style={ {
              borderBottom: '2px solid gray',
            } }
            src={ thumbnail }
            alt={ title }
          />
          <div
            className="d-flex flex-column align-items-center
              justify-content-center m-3 text-center card-title"
          >
            <h5 className="card-text">{title}</h5>
            <h5 className="card-text">
              R$
              {' '}
              { price }
            </h5>
            <h5 className="card-text">
              <ProductAmountMessage availableQuantity={ available_quantity } />
            </h5>
            <h5 className="card-text">
              <ShippingMessage shipping={ shipping } />
            </h5>
            <SendToCartButton
              title={ title }
              id={ id }
              thumbnail={ thumbnail }
              price={ price }
              available_quantity={ available_quantity }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  available_quantity: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductDetail;
