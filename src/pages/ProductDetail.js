/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';
import Header from '../components/HomeComponents/Header';
import ProductDetails from '../components/DetailComponents/ProductDetails';
import GlobalContext from '../Context/GlobalContext';

function ProductDetail() {
  const removeControl = 10;
  const lastCharacter = window.location.pathname.length;
  const idFromUrl = window.location.pathname
    .split('')
    .slice(removeControl, lastCharacter)
    .join('');
  const { productDetails, setProductDetails } = useContext(GlobalContext);
  const { freeShipping, setFreeShipping } = useContext(GlobalContext);

  useEffect(() => {
    async function getProductDetails(productId) {
      const request = await fetch(`https://api.mercadolibre.com/items/${productId}`);
      const result = await request.json();
      const returnedDetails = result;
      setProductDetails(returnedDetails);
      const { shipping: { free_shipping } } = returnedDetails;
      setFreeShipping(free_shipping);
      console.log(returnedDetails);
    }
    getProductDetails(idFromUrl);
  }, [setProductDetails, idFromUrl, setFreeShipping]);

  return (
    <div>
      <Header />
      <main>
        <ProductDetails
          id={ productDetails.id }
          title={ productDetails.title }
          price={ productDetails.price }
          thumbnail={ productDetails.thumbnail }
          available_quantity={ productDetails.available_quantity }
          shipping={ freeShipping }
        />
      </main>
    </div>
  );
}

export default ProductDetail;
