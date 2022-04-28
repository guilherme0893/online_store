import React from 'react';
import Header from '../components/HomeComponents/Header';
import SecondaryHeader from '../components/SecondaryHeader';
// import InputAndSearch from '../components/HomeComponents/InputAndSearch';
import MainProducts from '../components/HomeComponents/MainProducts';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header text="Online Store" />
      <SecondaryHeader text="Check the products for free shipping opportunities!" />
      {/* <InputAndSearch /> */}
      <MainProducts />
      <Footer />
    </>
  );
}

export default Home;
