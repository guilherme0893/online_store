import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Home/Header';
import ProductsByCategory from '../components/Categories/ProductsByCategory';

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
