import React, { useEffect, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import ProductCard from './ProductCard';

function MainProducts() {
  const { mainProducts, setMainProducts } = useContext(GlobalContext);

  useEffect(() => {
    async function getProductsFromCategoryAndQuery(categoryId, query) {
      const request = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
      const result = await request.json();
      console.log(result);
      const products = result.results;
      setMainProducts(products);
    }
    getProductsFromCategoryAndQuery();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMainProducts]);

  return (
    <main
      className="d-flex flex-wrap h-100 justify-content-center align-items-center border"
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
  );
}

export default MainProducts;
