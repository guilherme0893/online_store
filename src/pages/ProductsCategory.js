import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/HomeComponents/Header';
import ProductsByCategory from '../components/CategoriesComponents/ProductsByCategory';

function ProductsCategory() {
  return (
    <div>
      <Header text="Online Store" />
      <main
        className="d-flex flex-wrap h-100 justify-content-center
        align-items-center border"
      >
        <ProductsByCategory />
      </main>
      <Footer />
    </div>

  );
}

// ProductsCategory.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default ProductsCategory;
