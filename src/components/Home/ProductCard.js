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
      className="m-2 mt-2 overflow-hidden"
      style={ {
        backgroundColor: 'RGB(233, 236, 239)',
      } }
    >
      <Card className="d-flex flex-column align-items-center">
        <div className="pb-2">
          <Link to={ `/products/${id}` }>
            <img
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
          <h5 className="d-flex pt-2 justify-content-center">
            R$
            {
              price
            }
          </h5>
        </div>
      </Card>
    </Card>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  // available_quantity: PropTypes.number.isRequired,
};

export default ProductCard;
