/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import SendToCartButton from '../Home/SendToCartButton';

function ProductsCategoryCard(props) {
  const { title, id, thumbnail, price, available_quantity } = props;

  const sliceTitleLimit = 35;
  const shortedTitle = title.slice(0, sliceTitleLimit);

  return (
    <Container
      className="flex-col m-3 p-4 justify-content-evenly rounded overflow-hidden shadow"
      style={ {
        width: '20rem',
        backgroundColor: 'RGB(232, 232, 228)',
      } }
    >
      <Card className="d-flex align-items-center">
        <Card.Img
          className="rounded mx-auto d-block"
          src={ thumbnail }
          alt={ title }
          style={ {
            width: '15rem',
            height: '15rem',
          } }
        />
      </Card>
      <Card.Body className="mt-1 d-flex flex-column align-items-center">
        <Link to={ `/products/${id}` }>{shortedTitle}</Link>
        <Card.Text>
          R$
          { ' ' }
          {price}
        </Card.Text>
      </Card.Body>
      <SendToCartButton
        title={ title }
        id={ id }
        thumbnail={ thumbnail }
        price={ price }
        available_quantity={ available_quantity }
      />
    </Container>
  );
}

ProductsCategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default ProductsCategoryCard;
