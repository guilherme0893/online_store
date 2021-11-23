import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendToCartButton extends Component {
  sendProductToCart = () => {
    const { objectProduct, sendProductToCart } = this.props;
    const getProduct = JSON.parse(localStorage.getItem('product')) || [];
    const newProduct = {
      title: objectProduct.title,
      id: objectProduct.id,
      price: objectProduct.price,
      quantity: 1,
    };
    localStorage.setItem('product', JSON.stringify([...getProduct, newProduct]));
    sendProductToCart();
  }

  render() {
    const {
      sendProductToCart,
      props: { testId },
    } = this;
    return (
      <div>
        <button
          type="button"
          data-testid={ testId }
          onClick={ sendProductToCart }
        >
          Enviar para o carrinho
        </button>
      </div>
    );
  }
}

SendToCartButton.propTypes = {
  testId: PropTypes.string.isRequired,
  objectProduct: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
    PropTypes.bool, PropTypes.object,
    PropTypes.array,
  ])).isRequired,
  sendProductToCart: PropTypes.func.isRequired,
};

export default SendToCartButton;
