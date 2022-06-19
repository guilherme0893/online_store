/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Container } from 'react-bootstrap';
// import GlobalContext from '../../Context/GlobalContext';

function ProductQuantity(props) {
  // eslint-disable-next-line no-unused-vars
  const { available_quantity, price } = props;

  const [value, setValue] = useState('0'); // no globalProvider mudava todos os produtos -- talvez usar um provider separado depois;

  const quantityArray = Array.from(Array(available_quantity + 1).keys()); // cria um elemento iterável que possui as chaves do objeto com X propriedades (available_quantity)

  return (
    <Container className="text-center inline-block">
      <Container className="d-flex">
        <p className="m-auto">
          Escolha quantidade
        </p>
        <Form.Select
          style={ { width: '60px', marginLeft: '5px' } }
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
        </Form.Select>
      </Container>
      <Container className="text-center mt-3">
        <p>
          R$
          { (value * price).toFixed(2) }
        </p>
      </Container>
    </Container>
  );
}

ProductQuantity.propTypes = {
  available_quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductQuantity;
