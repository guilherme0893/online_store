import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, image, price, id } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          <p>{ title }</p>
          <img src={ image } alt={ title } />
          <p>{ price }</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
