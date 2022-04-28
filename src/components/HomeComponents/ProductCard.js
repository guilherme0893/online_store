/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SendToCartButton from './SendToCartButton';

function ProductCard(props) {
  const { title, price, thumbnail, id, available_quantity } = props;

  return (
    <div
      id="productCard"
      className="flex-col m-2 mt-4 p-4 justify-content-evenly
        rounded overflow-hidden shadow"
      style={ {
        border: '1px solid RGB(236, 228, 219)',
        width: '20rem',
        height: '370px',
        baseline: 'baseline',
        backgroundColor: 'RGB(232, 232, 228)',
      } }
    >
      <div className="d-flex align-items-center mb-3">
        <Link to={ `/products/${id}` }>
          <img
            className="img-thumbnail mx-auto d-block"
            style={ { width: '15rem', height: '15rem' } }
            src={ thumbnail }
            alt={ title }
          />
        </Link>
      </div>
      {/* <div className="mt-1 d-flex flex-column align-items-center">
        <Link to={ `/products/${id}` }>{title}</Link>
        <p className="">
          R$
          { ' ' }
          {price}
        </p>
      </div> */}
      <SendToCartButton
        title={ title }
        id={ id }
        thumbnail={ thumbnail }
        price={ price }
        available_quantity={ available_quantity }
      />
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default ProductCard;
