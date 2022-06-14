/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { BsZoomIn } from 'react-icons/bs';

function ProductCard(props) {
  const { title, price, thumbnail, id } = props;

  return (
    <Card
      id="productCard"
      className="m-2 overflow-hidden shadow-sm"
    >
      <Card
        className="d-flex flex-column align-items-center"
        style={ {
          backgroundColor: '#f5fbfd',
        } }
      >
        <Card.Img
          className="img-thumbnail mx-auto d-block"
          style={ {
            width: '15rem',
            height: '15rem',
            borderBottom: '2px solid gray',
          } }
          src={ thumbnail }
          alt={ title }
        />
        <Card.Body className="d-flex">
          <Card.Text className="fw-bold m-1">
            R$
            {
              price
            }
          </Card.Text>
          <Link
            className="d-flex m-1"
            to={ `/products/${id}` }
            style={ { textDecoration: 'none' } }
          >
            <BsZoomIn style={ { color: 'black', fontSize: '20px' } } />
          </Link>
          {/* <BsCart className="d-flex m-1" style={ { fontSize: '20px' } } /> */}
        </Card.Body>
      </Card>
    </Card>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductCard;
