import React from 'react';
import Header from '../components/HomeComponents/Header';
// import InputAndSearch from '../components/HomeComponents/InputAndSearch';
import MainProducts from '../components/HomeComponents/MainProducts';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      {/* <InputAndSearch /> */}
      <MainProducts />
      <Footer />
    </>
  );
}

export default Home;
