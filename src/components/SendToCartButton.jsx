import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendToCartButton extends Component {
  render() {
    const { sendProductToCart, productId } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ sendProductToCart }
          id={ productId }
        >
          Enviar para o carrinho
        </button>
      </div>
    );
  }
}

SendToCartButton.propTypes = {
  sendProductToCart: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};

export default SendToCartButton;
