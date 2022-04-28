/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import SendToCartButton from '../HomeComponents/SendToCartButton';

function ProductDetail(props) {
  const { title, price, thumbnail, available_quantity, shipping, id } = props;
  const TEN = 10;
  // const ONE = 1;
  const fewProductsAvailable = available_quantity < TEN ? 'Últimas unidades!' : null;
  // const lastProduct = available_quantity === ONE ? 'Última unidade!' : null;

  return (
    <div
      className="d-flex flex-row align-items-center mt-3 mb-3 p-4
        rounded overflow-hidden shadow"
      style={ {
        margin: 'auto',
        border: '1px solid black',
        width: '60rem',
        height: '25rem',
        baseline: 'baseline',
        backgroundColor: 'RGB(232, 232, 228)',
      } }
    >
      <div
        className="d-flex align-items-center"
        style={ { width: '40rem', height: '20rem' } }
      >
        <img
          className="img-thumbnail rounded d-block border border-dark m-3 p-3"
          style={ { width: '40rem', height: '20rem' } }
          src={ thumbnail }
          alt={ title }
        />
      </div>
      <div
        className="d-flex flex-column align-items-center m-5 pt-4"
        style={ { width: '40rem', height: '20rem' } }
      >
        <h5 className="text-center">{title}</h5>
        <p className="text-center">
          R$
          {' '}
          { price }
        </p>
        <p
          className="text-center"
          style={ { fontWeight: 'bold' } }
        >
          { fewProductsAvailable }
        </p>
        <p
          className="text-center font-weight-bold"
          style={ { fontWeight: 'bold' } }
        >
          { shipping ? 'Frete grátis!' : null }
        </p>
        <div>
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
