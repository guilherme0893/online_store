/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';
import Header from '../components/Home/Header';
import ProductDetails from '../components/Details/ProductDetails';
import GlobalContext from '../Context/GlobalContext';
import SecondaryHeader from '../components/SecondaryHeader';

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
    }
    getProductDetails(idFromUrl);
  }, [setProductDetails, idFromUrl, setFreeShipping]);

  const text = 'Want to see something else? Check different categories!';

  return (
    <div>
      <Header text="Online Store" />
      <SecondaryHeader text={ text } />
      <ProductDetails
        id={ productDetails.id }
        title={ productDetails.title }
        price={ productDetails.price }
        thumbnail={ productDetails.thumbnail }
        available_quantity={ productDetails.available_quantity }
        shipping={ freeShipping }
      />
    </div>
  );
}

export default ProductDetail;
