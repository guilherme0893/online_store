import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendToCartButton extends Component {
  addQuantity = (getProduct, objectProduct) => {
    const oldProduct = getProduct.find((product) => product.id === objectProduct.id);
    const newList = getProduct.filter((product) => product.id !== objectProduct.id);
    oldProduct.quantity += 1;
    localStorage.setItem('product', JSON.stringify([...newList, oldProduct]));
  }

  sendProductToCart = () => {
    const { objectProduct } = this.props;
    const getProduct = JSON.parse(localStorage.getItem('product')) || [];
    if (getProduct.some((product) => product.id === objectProduct.id)) {
      this.addQuantity(getProduct, objectProduct);
    } else {
      const newProduct = {
        title: objectProduct.title,
        id: objectProduct.id,
        price: objectProduct.price,
        quantity: 1,
        image: objectProduct.thumbnail,
      };
      localStorage.setItem('product', JSON.stringify([...getProduct, newProduct]));
    }
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
  objectProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default SendToCartButton;
