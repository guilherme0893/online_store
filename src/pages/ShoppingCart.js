import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.addQuantProduct = this.addQuantProduct.bind(this);
    this.subQuantProduct = this.subQuantProduct.bind(this);
    this.eraseButton = this.eraseButton.bind(this);

    this.state = {
      empty: true,
      productInCart: [],
    };
  }

  componentDidMount() {
    this.loadProductsInCart();
  }

  loadProductsInCart = async () => {
    const product = await JSON.parse(localStorage.getItem('product'));
    if (product) this.setState({ empty: false, productInCart: product });
    // else this.setState({ empty: false, productInCart: [{ title: 'Pequeno Principe, O', quantity: 1 }] });
  };

  addQuantProduct(event) {
    const products = JSON.parse(localStorage.getItem('product')) || [];
    if (products) {
      const oldProduct = products.find((product) => product.id === event.target.id);
      const newList = products.filter((product) => product.id !== event.target.id);
      oldProduct.quantity += 1;
      localStorage.setItem('product', JSON.stringify([...newList, oldProduct]));
      this.setState({
        productInCart: JSON.parse(localStorage.getItem('product')),
      });
    }
  }

  subQuantProduct(event) {
    const products = JSON.parse(localStorage.getItem('product')) || [];
    if (products) {
      const oldProduct = products.find((product) => product.id === event.target.id);
      const newList = products.filter((product) => product.id !== event.target.id);
      if (oldProduct.quantity === 1) {
        localStorage.setItem('product', JSON.stringify([...newList]));
        this.setState({
          productInCart: JSON.parse(localStorage.getItem('product')),
        });
      } else {
        oldProduct.quantity -= 1;
        localStorage.setItem('product', JSON.stringify([...newList, oldProduct]));
        this.setState({
          productInCart: JSON.parse(localStorage.getItem('product')),
        });
      }
    }
  }

  eraseButton(event) {
    const products = JSON.parse(localStorage.getItem('product')) || [];
    if (products) {
      const newList = products.filter((product) => product.id !== event.target.id);
      localStorage.setItem('product', JSON.stringify([...newList]));
      this.setState({
        productInCart: JSON.parse(localStorage.getItem('product')),
      });
    }
  }

  render() {
    const { productInCart, empty } = this.state;

    return (
      <div>
        {empty ? (
          <h4 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h4>
        ) : null}

        {productInCart.map((product) => (
          <div key={ product.id }>
            <span data-testid="shopping-cart-product-name">
              {product.title}
            </span>

            <img src={ product.image } alt={ product.title } />
            <span>{product.price}</span>
            <button
              type="button"
              id={ product.id }
              onClick={ this.addQuantProduct }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <span data-testid="shopping-cart-product-quantity">
              {product.quantity}
            </span>
            <button
              type="button"
              id={ product.id }
              onClick={ this.subQuantProduct }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <button
              type="button"
              id={ product.id }
              onClick={ this.eraseButton }
            >
              X
            </button>
          </div>
        ))}
        <Link
          data-testid="checkout-products"
          to="/checkout"
        >
          Checkout
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
