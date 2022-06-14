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
      className="d-flex flex-row rounded overflow-hidden shadow"
      style={ {
        backgroundColor: 'RGB(232, 232, 228)',
        width: '50rem',
        height: '25rem',
        margin: 'auto',
      } }
    >
      <Card.Body
        className="d-flex justify-content-center m-2 p-4"
      >
        <img
          className="img-thumbnail rounded d-block border border-dark"
          src={ thumbnail }
          alt={ title }
        />
        <Card.Text className="justify-content-center m-5 text-center">
          <Card.Text>{title}</Card.Text>
          <Card.Text>
            R$
            {' '}
            { price }
          </Card.Text>
          <Card.Text
            style={ { fontWeight: 'bold' } }
          >
            { fewProductsAvailable }
          </Card.Text>
          <Card.Text
            className="fw-bold"
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
        </Card.Text>
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
