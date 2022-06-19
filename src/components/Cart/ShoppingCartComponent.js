import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductsInCart from './ProductsInCart';
import Subtotal from './Subtotal';

function ShoppingCartComponent() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      const products = JSON.parse(localStorage.getItem('productsInCart'));
      if (!products || products.length === 0) {
        setCart([]);
      }
      if (products) {
        const productsInCart = [...new Map(products
          .map((product) => [JSON.stringify(product), product])).values()];
        setCart(productsInCart);
      }
    };
    getProducts();
  }, [setCart]);

  return (
    <Container
      className="d-flex flex-column mb-4 gap-2 shadow"
      style={ { backgroundColor: 'white' } }
    >
      {cart.length === 0
        ? (
          <Container
            className="text-center d-flex flex-col mx-auto align-items-center"
          >
            <h2>
              Seu carrinho está vazio!
            </h2>
          </Container>
        )
        : cart
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
      <Container className="d-flex justify-content-end" style={ { marginRight: '10px' } }>
        <Subtotal />
      </Container>
    </Container>
  );
}

export default ShoppingCartComponent;
