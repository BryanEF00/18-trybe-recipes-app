import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Foods() {
  return (
    <div>
      <Header
        title="Foods"
        withSearchButton
      />
      <p>PÁGINA DE COMIDAS</p>
      <Footer />
    </div>
  );
}

export default Foods;
