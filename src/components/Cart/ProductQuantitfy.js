/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductQuantity(props) {
  // eslint-disable-next-line no-unused-vars
  const { available_quantity, price } = props;

  const [value, setValue] = useState('0'); // no globalProvider mudava todos os produtos -- talvez usar um provider separado depois;

  const quantityArray = Array.from(Array(available_quantity + 1).keys()); // cria um elemento iterável que possui as chaves do objeto com X propriedades (available_quantity)

  return (
    <div className="text-center inline-block">
      <div className="d-flex">
        <p className="m-auto">
          Escolha quantidade
        </p>
        <select
          value={ value }
          onChange={ (event) => setValue(event.target.value) }
        >
          {quantityArray.map((quantity, index) => (
            <option
              className="text-center"
              key={ index }
              value={ quantity }
            >
              { Number(quantity) }
            </option>
          ))}
        </select>
      </div>
      <div className="text-center mt-3">
        <p>
          Subtotal: R$
          { (value * price).toFixed(2) }
        </p>
      </div>
    </div>
  );
}

ProductQuantity.propTypes = {
  available_quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductQuantity;