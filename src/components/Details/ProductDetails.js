/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import SendToCartButton from '../Home/SendToCartButton';

function ProductDetail(props) {
  const { title, price, thumbnail, available_quantity, shipping, id } = props;
  const TEN = 10;
  // const ONE = 1;
  const fewProductsAvailable = available_quantity < TEN ? 'Últimas unidades!' : null;
  // const lastProduct = available_quantity === ONE ? 'Última unidade!' : null;

  return (
    <Card
      className="d-flex flex-row rounded shadow mx-5"
      style={ {
        border: '1px solid black',
        backgroundColor: 'RGB(232, 232, 228)',
      } }
    >
      <Card.Body
        className="d-flex justify-content-center m-5 "
        style={ { width: '40rem', height: '20rem' } }
      >
        <div>
          <img
            className="img-thumbnail rounded d-block border border-dark"
            style={ { width: '25rem', height: '20rem' } }
            src={ thumbnail }
            alt={ title }
          />
        </div>
        <div className="justify-content-center m-5">
          <Card.Text className="text-center">{title}</Card.Text>
          <Card.Text className="text-center">
            R$
            {' '}
            { price }
          </Card.Text>
          <Card.Text
            className="text-center"
            style={ { fontWeight: 'bold' } }
          >
            { fewProductsAvailable }
          </Card.Text>
          <Card.Text
            className="text-center font-weight-bold"
            style={ { fontWeight: 'bold' } }
          >
            { shipping ? 'Frete grátis!' : null }
          </Card.Text>
          <SendToCartButton
            title={ title }
            id={ id }
            thumbnail={ thumbnail }
            price={ price }
            available_quantity={ available_quantity }
          />
        </div>
      </Card.Body>
    </Card>
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
