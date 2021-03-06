import React, { useEffect, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductsCategoryCard from './ProductsCategoryCard';
import GlobalContext from '../../Context/GlobalContext';

function ProductsByCategory() {
  const { productsByCategory, setProductsByCategory } = useContext(GlobalContext);

  useEffect(() => {
    async function getCategoriesById(categoryId) {
      const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      const result = await request.json();
      const products = result.results;
      setProductsByCategory(products);
    }
    const url = window.location.href;
    // major change to solve bug when using url different from the localhost:3000
    const categoryFromURL = url.substring(url.lastIndexOf('/') + 1); // replace('http://localhost:3000/products/category/', '');
    getCategoriesById(categoryFromURL);
  });

  return (
    <div>
      {
        productsByCategory.length === 0 ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )
          : (
            <main
              className="d-flex flex-wrap h-100 justify-content-center"
            >
              {productsByCategory.map((products) => (
                <ProductsCategoryCard
                  key={ products.id }
                  thumbnail={ products.thumbnail }
                  title={ products.title }
                  price={ products.price }
                  id={ products.id }
                  available_quantity={ products.available_quantity }
                />
              ))}
            </main>
          )
      }
    </div>

  );
}

export default ProductsByCategory;
