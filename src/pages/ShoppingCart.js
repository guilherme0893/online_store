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

  componentDidMount() {
    this.loadProductsInCart();
  }

  loadProductsInCart = () => {
    this.setState({
      // quem entra aqui é o arrayProduct que está na home
      productInCart: '',
    }, () => {
      const { productInCart } = this.state;
      if (productInCart.length > 0) {
        this.setState({ empty: false });
      }
    });
  }

  render() {
    const { productInCart, empty } = this.state;
    // criação do ternário no carrinho
    return (
      <div>
        { empty
          ? (
            <h4 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h4>
          )
          : (
            productInCart.map((product) => (
              <div key={ product.id }>
                <span data-testid="shopping-cart-product-name">
                  { product.id }
                </span>
              </div>
            )))}
      </div>
    );
  }
}

export default ShoppingCart;
