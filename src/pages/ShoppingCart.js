import React from 'react';
import Home from './Home';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.addQuantProduct = this.addQuantProduct.bind(this);
    this.subQuantProduct = this.subQuantProduct.bind(this);
    
    this.state ={
      arrayProduct,
      clicksNumber: 0,
      price: 0,
    }
   }

   totalPrice() {
    const { clicksNumber, price } = this.state;
    return clicksNumber * price;
   }

   addQuantProduct(id) {
    arrayProduct.find((element) => {
      return element.id === id;
      this.setState(prevState)
      clicksNumber: prevState.clicksNumber + 1;
    }, () => totalPrice())
   }

   subQuantProduct(id) {
    arrayProduct.filter((element) => {
      return element.id !== id;
      this.setState(prevState)
      clicksNumber: prevState.clicksNumber - 1;
      price: element.price
    }, () => totalPrice())
   }

     
  render() {

    const { arrayProduct } = this.state;

    return (
      <div>
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
      </div>
    );
  }
}

export default ShoppingCart;

