import React from 'react';
import Home from './Home';
// import ProductCard from '../components/ProductCard';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.addQuantProduct = this.addQuantProduct.bind(this);
    this.subQuantProduct = this.subQuantProduct.bind(this);

    this.state ={
      empty: true,
      productInCart: [],
      // arrayProduct,
      // clicksNumber: 0,
      // price: 0,
    }
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

  //  totalPrice() {
  //   const { clicksNumber, price } = this.state;
  //   this.setState({ [price]: clicksNumber * price )}
  //  }

  //  addQuantProduct(id) {
  //   arrayProduct.find((element) => {
  //     return element.id === id;
  //     this.setState(prevState)
  //     clicksNumber: prevState.clicksNumber + 1;
  //   }, () => totalPrice())
  //  }

  //  subQuantProduct(id) {
  //   arrayProduct.filter((element) => {
  //     return element.id !== id;
  //     this.setState(prevState)
  //     clicksNumber: prevState.clicksNumber - 1;
  //     price: element.price
  //   }, () => totalPrice())
  //  }

     
  render() {
    const { productInCart, empty } = this.state;
    // const { arrayProduct } = this.state;

    return (
      <>
        {/* <div>
          <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
          {
            arrayProduct.map((product) =>
              <div key={ product.id }>
                <ProductCard product={ product } />
                <button type="button" onClick={ this.addQuantProduct }>+</button>
                <button type="button" onClick={ this.subQuantProduct }>-</button>
                
              </div>  
              )
          }
          </div> */}
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
      </>
    );
  }
}

export default ShoppingCart;
