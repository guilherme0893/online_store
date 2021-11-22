import React from 'react';
// import ProductCard from '../components/ProductCard';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      empty: true,
      productInCart: [],
    };
  }

  componentDidMount = () => {
    this.loadProductsInCart();
  }

  loadProductsInCart = async () => {
    const product = await JSON.parse(localStorage.getItem('product'));
    if (product) this.setState({ empty: false, productInCart: product });
    // else this.setState({ empty: false, productInCart: [{ title: 'Pequeno Principe, O', quantity: 1 }] });
  }

  render() {
    const { productInCart, empty } = this.state;
    return (
      <div>
        {empty
          ? (
            <h4 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h4>
          ) : null}

        {
          productInCart.map((product) => (
            <div key={ product.id }>
              <span data-testid="shopping-cart-product-name">
                { product.title }
              </span>
              <span data-testid="shopping-cart-product-quantity">
                { product.quantity }
              </span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ShoppingCart;
