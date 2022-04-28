import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

// fiz a correçaõ do nom,e da função, ois estava causando erro no test//
function ExploreNationalities() {
  return (
    <div>
      <Header
        title="Explore Nationalities"
        withSearchButton
      />
      <p>PÁGINA DE EXPLORAR POR NACIONALIDADE</p>
      <Footer />
    </div>
  );
}

export default ExploreNationalities;
