/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

function ProductAmountMessage(props) {
  const { availableQuantity } = props;

  const productAmountMessage = () => {
    const TEN = 10;
    const ONE = 1;
    if (availableQuantity === ONE) {
      return 'Última unidade!';
    }
    if (availableQuantity < TEN) {
      return 'Últimas unidades!';
    }
  };

  return (
    <div style={ { fontWeight: 'bold' } }>
      {
        productAmountMessage()
      }
    </div>
  );
}

ProductAmountMessage.propTypes = {
  availableQuantity: PropTypes.number.isRequired,
};

export default ProductAmountMessage;
