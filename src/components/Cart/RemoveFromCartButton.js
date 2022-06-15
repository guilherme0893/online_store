import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';

function RemoveFromCartButton(props) {
  const { setSendToLocalStorage } = useContext(GlobalContext);
  const { productId } = props;

  const removeProductFromCart = () => {
    const products = JSON.parse(localStorage.getItem('productsInCart'));
    const filteredProducts = products
      .filter((product) => product.productId !== productId);
    setSendToLocalStorage(filteredProducts);
    const url = window.location.href;
    const controlURL = url.substring(url.lastIndexOf('/') + 1);
    if (controlURL) {
      window.location.reload(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning border border-dark"
        onClick={ () => removeProductFromCart() }
      >
        Remover item
      </button>
    </div>
  );
}

RemoveFromCartButton.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default RemoveFromCartButton;
