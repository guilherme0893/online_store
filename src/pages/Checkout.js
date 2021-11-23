import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0,
    };

    this.fetchCart = this.fetchCart.bind(this);
  }

  componentDidMount() {
    this.fetchCart();
  }

  fetchCart = async () => {
    const products = await JSON.parse(localStorage.getItem('product'));
    const total = products.reduce((acc, product) => acc + product.price, 0);

    this.setState({
      cart: products,
      total,
    });
  }

  render() {
    const { cart, total } = this.state;
    return (
      <div>
        <div className="products">
          { cart.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">
                { product.title }
              </p>
              <p data-testid="shopping-cart-product-quantity">
                { product.quantity }
              </p>
            </div>
          ))}
          <p>
            Total
            { total }
          </p>
        </div>

        <div className="checkout">
          <label htmlFor="fullname">
            <input
              data-testid="checkout-fullname"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Nome completo"
            />
          </label>
          <label htmlFor="email">
            <input
              data-testid="checkout-email"
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="cpf">
            <input
              data-testid="checkout-cpf"
              type="text"
              name="cpf"
              id="cpf"
              placeholder="CPF"
            />
          </label>
          <label htmlFor="phone">
            <input
              data-testid="checkout-phone"
              type="text"
              name="phone"
              id="phone"
              placeholder="Telefone"
            />
          </label>
          <label htmlFor="cep">
            <input
              data-testid="checkout-cep"
              type="text"
              name="cep"
              id="cep"
              placeholder="CEP"
            />
          </label>
          <label htmlFor="address">
            <input
              data-testid="checkout-address"
              type="text"
              name="address"
              id="address"
              placeholder="Endereço"
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Checkout;
