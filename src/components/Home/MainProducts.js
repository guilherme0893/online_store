/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import GlobalContext from '../../Context/GlobalContext';
import ProductCard from './ProductCard';

function MainProducts() {
  const { mainProducts, setMainProducts } = useContext(GlobalContext);

  useEffect(() => {
    async function getProductsFromCategoryAndQuery(categoryId, query) {
      const request = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
      const result = await request.json();
      const products = result.results;
      setMainProducts(products);
    }
    getProductsFromCategoryAndQuery();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMainProducts]);

  return (
    <div className="w-75 mx-auto">
      {
        mainProducts.length === 0
          ? <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          : <main
            className="d-flex flex-wrap justify-content-between"
          >
            {mainProducts.map((products) => (
              <ProductCard
                key={ products.id }
                thumbnail={ products.thumbnail }
                title={ products.title }
                price={ products.price }
                available_quantity={ products.available_quantity }
                id={ products.id }
              />
            ))}
          </main>
      }
    </div>
  );
}

export default MainProducts;
