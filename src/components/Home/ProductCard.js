/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsZoomIn } from 'react-icons/bs';

function ProductCard(props) {
  const { title, price, thumbnail, id } = props;

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div
        className="mb-1 m-lg-2 m-md-2 card align-items-center"
      >
        <div
          className="d-flex flex-column"
          style={ {
            backgroundColor: '#f5fbfd',
          } }
        >
          <img
            className=""
            style={ {
              width: '15rem',
              height: '15rem',
              borderBottom: '2px solid gray',
            } }
            src={ thumbnail }
            alt={ title }
          />
        </div>
        <div className="d-flex flex-lg-row card-body">
          <h5 className="fw-bold m-1 card-title">
            R$
            {
              price
            }
          </h5>
          <Link
            className="d-flex m-1"
            to={ `/products/${id}` }
            style={ { textDecoration: 'none' } }
          >
            <BsZoomIn style={ { color: 'black', fontSize: '20px' } } />
          </Link>
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
};

export default ProductCard;
