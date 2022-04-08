import React from 'react';
// import GlobalContext from '../../Context/GlobalContext';

function RemoveFromCartButton() {
  // chamar o LS
  // filtrar o LS
  // devolver o array filtrado e renderizar
  // const { setSendToLocalStorage } = useContext(GlobalContext);

  // const removeProductFromCart = () => {
  //   const products = JSON.parse(localStorage.getItem('productsInCart'));
  //   const filteredProducts = products.shift();
  //   setSendToLocalStorage(filteredProducts);
  //   console.log(filteredProducts);
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
