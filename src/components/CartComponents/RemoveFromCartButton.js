import React from 'react';
// import GlobalContext from '../../Context/GlobalContext';

function RemoveFromCartButton() {
  // const { id } = props;
  // chamar o LS
  // filtrar o LS
  // devolver o array filtrado e renderizar
  // const { setSendToLocalStorage } = useContext(GlobalContext);

  // const removeProductFromCart = (target) => {
  //   // console.log(id);
  //   const products = JSON.parse(localStorage.getItem('productsInCart'));
  //   console.log(products);
  //   const filteredProducts = products.filter((product) => product.productId === target);
  //   // const filteredProducts = products.shift();  ?? ---> não serve para nada isso, remove o array e deixa só o objeto e quebra tudo
  //   console.log(filteredProducts);
  //   return setSendToLocalStorage(filteredProducts);
  // };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning border border-dark"
        // onClick={ (event) => removeProductFromCart(event.target) }
      >
        Remover item
      </button>
    </div>
  );
}

export default RemoveFromCartButton;
