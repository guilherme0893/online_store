import React from 'react';
import CartHeader from '../components/Cart/CartHeader';
import ShoppingCartComponent from '../components/Cart/ShoppingCartComponent';
import SecondaryHeader from '../components/SecondaryHeader';

function ShoppingCart() {
  return (
    <div>
      <CartHeader />
      <SecondaryHeader text="Check carefully before the checkout!" />
      <ShoppingCartComponent />
    </div>
  );
}

export default ShoppingCart;
