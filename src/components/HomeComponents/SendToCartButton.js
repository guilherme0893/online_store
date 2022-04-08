import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';

function SendToCartButton(props) {
  const { sendToLocalStorage, setSendToLocalStorage } = useContext(GlobalContext);
  // eslint-disable-next-line camelcase
  const { title, id, thumbnail, price, available_quantity } = props;

  function sendToCart() {
    const productObject = {
      productId: id,
      productTitle: title,
      productImage: thumbnail,
      productPrice: price,
      productQuantity: available_quantity,
    };
    return setSendToLocalStorage([...sendToLocalStorage, productObject]);
  }

  return (
    <div className="text-center">
      <button
        type="button"
        className="btn btn-success"
        // style={ { backgroundColor: 'rgb(70, 73, 76)' } }
        onClick={ () => sendToCart() }
      >
        Send to cart
      </button>
    </div>
  );
}

SendToCartButton.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default SendToCartButton;
