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
      className="flex-col m-2 mt-2 justify-content-evenly
        rounded overflow-hidden"
      style={ {
        // border: '1px',
        width: '18rem',
        height: '340px',
        baseline: 'baseline',
        backgroundColor: 'RGB(233, 236, 239)',
      } }
    >
      <div className="d-flex flex-column align-items-center">
        <div className="p-4">
          <Link to={ `/products/${id}` }>
            <img
              className="img-thumbnail mx-auto d-block"
              style={ { width: '15rem', height: '15rem' } }
              src={ thumbnail }
              alt={ title }
            />
          </Link>
        </div>
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

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default ProductCard;
