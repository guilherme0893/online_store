import React from 'react';
// import React, { useContext } from 'react';
// import GlobalContext from '../../Context/GlobalContext';

function RemoveFromCartButton() {
  // const { setSendToLocalStorage } = useContext(GlobalContext);

  // const removeProductFromCart = (productId) => {
  //   const products = JSON.parse(localStorage.getItem('productsInCart'));
  //   const filteredProducts = products
  //     .filter((product) => product.productId !== productId);
  //   // const filteredProducts = products.shift();  ?? ---> não serve para nada isso, remove o array e deixa só o objeto e quebra tudo
  //   console.log(filteredProducts);
  //   return setSendToLocalStorage(filteredProducts);
  // };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning border border-dark"
        // onClick={ () => removeProductFromCart() }
      >
        Remover item
      </button>
    </div>
  );
}

export default RemoveFromCartButton;
