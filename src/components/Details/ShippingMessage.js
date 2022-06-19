/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

function ShippingMessage(props) {
  const { shipping } = props;

  return (
    <div className="fw-bold">
      { shipping ? 'Frete grátis!' : null }
    </div>
  );
}

ShippingMessage.propTypes = {
  shipping: PropTypes.string.isRequired,
};

export default ShippingMessage;
