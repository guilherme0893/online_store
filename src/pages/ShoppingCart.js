import React from 'react';
import CartHeader from '../components/CartComponents/CartHeader';
import ProductsInCart from '../components/CartComponents/ProductsInCart';
import Footer from '../components/Footer';

function ShoppingCart() {
  const getProducts = () => {
    const products = JSON.parse(localStorage.getItem('productsInCart'));
    if (!products) {
      return false;
    }
    if (products) {
      return [...new Map(products
        .map((product) => [JSON.stringify(product), product])).values()];
    }
  };

  const products = getProducts();

  return (
    <div className="mb-4 d-grid gap-2">
      <div>
        <CartHeader />
      </div>
      <main
        className="d-flex flex-column"
        // style={ { width: '50%', margin: 'auto' } }
      >
        {products === false
          ? <h2 className="text-center">Seu carrinho está vazio!</h2>
          : products
            .map((product, index) => (
              <ProductsInCart
                key={ index }
                thumbnail={ product.productImage }
                title={ product.productTitle }
                price={ product.productPrice }
                id={ product.productId }
                available_quantity={ product.productQuantity }
              />
            ))}
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
