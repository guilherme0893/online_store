/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import ProductQuantity from './ProductQuantitfy';
import RemoveFromCartButton from './RemoveFromCartButton';

function ProductsInCart(props) {
  const { title, thumbnail, price, available_quantity, id } = props;

  return (
    <div className="col-12 col-md-6 m-lg-auto md-m-auto mh-100">
      <div
        id={ id }
        className="card mt-2 rounded overflow-hidden shadow"
        style={ {
          backgroundColor: 'RGB(232, 232, 228)',
        } }
      >
        <div className="d-lg-flex m-2 md-align-items-center align-items-center card-body">
          <img
            className="card-img-top img-thumbnail rounded border border-dark m-3 p-3"
            src={ thumbnail }
            alt={ title }
          />
          <div className="d-flex flex-column align-items-center">
            <h6 className="card-text">{title}</h6>
            <h6 className="card-text">
              R$
              { ' ' }
              {price}
            </h6>
            <ProductQuantity
              available_quantity={ available_quantity }
              price={ price }
            />
            <RemoveFromCartButton productId={ id } />
          </div>
        </div>
      </div>
    </div>

  );
}

ProductsInCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default ProductsInCart;
