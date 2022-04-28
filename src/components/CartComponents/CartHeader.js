import React from 'react';
import BackHomeButton from '../BackHomeButton';
import CheckoutButton from './CheckoutButton';

function CartHeader() {
  return (
    <div className="">
      <header
        className="text-center d-flex flex-row justify-content-between border p-3"
        style={ {
          backgroundColor: 'rgb(76, 92, 104)',
        } }
      >
        <div className="d-flex m-4">
          <BackHomeButton />
        </div>
        <div className="d-flex m-4">
          <h1 className="text-light">Shopping Cart</h1>
        </div>
        <div className="d-flex m-4">
          <CheckoutButton />
        </div>
      </header>
    </div>
  );
}

export default CartHeader;
