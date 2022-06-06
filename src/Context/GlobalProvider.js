import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';
import saveToLocalStorageHook from '../hooks/saveToLocalStorageHook';

function GlobalProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const [mainProducts, setMainProducts] = useState([]);

  const [productsByCategory, setProductsByCategory] = useState([]);

  const [productDetails, setProductDetails] = useState([]);

  const [freeShipping, setFreeShipping] = useState(false);

  const [cartEmpty, setCartEmpty] = useState(true);

  const [
    sendToLocalStorage,
    setSendToLocalStorage,
  ] = saveToLocalStorageHook('productsInCart', []);

  const [filter, setFilter] = useState();

  const [totalValue, setTotalValue] = useState(0);

  const [searchProduct, setSearchProduct] = useState([]);

  const contextValues = {
    categories,
    setCategories,
    mainProducts,
    setMainProducts,
    productsByCategory,
    setProductsByCategory,
    productDetails,
    setProductDetails,
    freeShipping,
    setFreeShipping,
    cartEmpty,
    setCartEmpty,
    sendToLocalStorage,
    setSendToLocalStorage,
    filter,
    setFilter,
    totalValue,
    setTotalValue,
    searchProduct,
    setSearchProduct,
  };

  return (
    <GlobalContext.Provider value={ contextValues }>
      { children }
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
