// import React, { useEffect, useContext } from 'react';
import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/HomeComponents/Header';
// import ProductsCategoryCard from
//   '../components/CategoriesComponents/ProductsCategoryCard';
import ProductsByCategory from '../components/CategoriesComponents/ProductsByCategory';
// import GlobalContext from '../Context/GlobalContext';

function ProductsCategory() {
  return (
    <div>
      <Header />
      <main
        className="d-flex flex-wrap h-100 justify-content-center
        align-items-center border"
      >
        <ProductsByCategory />
      </main>
    </div>

  );
}

// ProductsCategory.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default ProductsCategory;
