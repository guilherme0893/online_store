/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function ProductCard(props) {
  const { title, price, thumbnail, id } = props;

  return (
    <Card
      id="productCard"
      className="m-2 mt-2 overflow-hidden shadow-lg"
      style={ {
        backgroundColor: 'RGB(233, 236, 239)',
      } }
    >
      <Card className="d-flex flex-column align-items-center">
        <Link to={ `/products/${id}` }>
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
        </Link>
        <Card.Text className="fw-bold d-flex pt-2 pb-2 justify-content-center">
          R$
          {
            price
          }
        </Card.Text>
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
