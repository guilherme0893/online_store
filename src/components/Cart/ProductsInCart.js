/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import ProductQuantity from './ProductQuantitfy';
import RemoveFromCartButton from './RemoveFromCartButton';

function ProductsInCart(props) {
  const { title, thumbnail, price, available_quantity, id } = props;

  return (
    <Card
      id={ id }
      className="border border-dark d-flex flex-row mt-3
        mb-3 p-4 rounded overflow-hidden shadow"
      style={ {
        margin: 'auto',
        backgroundColor: 'RGB(232, 232, 228)',
        width: '50rem',
        height: '20rem',
        baseline: 'baseline',
      } }
    >
      <Card.Body className="d-flex align-items-center">
        <Card.Img
          className="img-thumbnail rounded d-block border border-dark m-3 p-3"
          style={ { width: '20rem', height: '15rem' } }
          src={ thumbnail }
          alt={ title }
        />
        <Container className="d-flex flex-column align-items-center m-5">
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="">
            R$
            { ' ' }
            {price}
          </Card.Text>
          <Container className="ml-2 d-flex flex-row text-center align-items-center">
            <ProductQuantity
              available_quantity={ available_quantity }
              price={ price }
            />
          </Container>
          <Container className="d-flex flex-column align-items-center">
            <RemoveFromCartButton productId={ id } />
          </Container>
        </Container>
      </Card.Body>
    </Card>
  );
}

ProductsInCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default ProductsInCart;
