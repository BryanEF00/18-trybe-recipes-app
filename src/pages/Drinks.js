import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Drinks() {
  return (
    <div>
      <Header
        title="Drinks"
        withSearchButton
      />
      <p>PÁGINA DE BEBIDAS</p>
      <Footer />
    </div>
  );
}

export default Drinks;
