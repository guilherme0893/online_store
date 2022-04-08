/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SendToCartButton from '../HomeComponents/SendToCartButton';

function ProductsCategoryCard(props) {
  const { title, id, thumbnail, price } = props;

  return (
    <div
      className="flex-col m-3 p-4 justify-content-evenly rounded overflow-hidden"
      style={ {
        border: '1px solid black',
        width: '20rem',
        height: '370px',
        baseline: 'baseline',
      } }
    >
      <div className="d-flex align-items-center">
        <img
          className="img-thumbnail rounded mx-auto d-block"
          style={ { width: '10rem', height: '10rem' } }
          src={ thumbnail }
          alt={ title }
        />
      </div>
      <div className="mt-1 d-flex flex-column align-items-center">
        <Link to={ `/products/${id}` }>{title}</Link>
        <p className="">
          R$
          { ' ' }
          {price}
        </p>
      </div>
      <SendToCartButton
        title={ title }
        id={ id }
        thumbnail={ thumbnail }
        price={ price }
        // available_quantity={ available_quantity }
      />
    </div>
  );
}

ProductsCategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  // available_quantity: PropTypes.number.isRequired,
};

export default ProductsCategoryCard;
