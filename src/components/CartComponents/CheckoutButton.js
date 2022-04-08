import React from 'react';
import { useHistory } from 'react-router-dom';

function CheckoutButton() {
  const history = useHistory();
  return (
    <div>
      <button
        type="button"
        className="btn btn-success b border-dark p-3 rounded"
        onClick={ () => history.push('/checkout') }
      >
        Fechar pedido
      </button>
    </div>
  );
}

export default CheckoutButton;
