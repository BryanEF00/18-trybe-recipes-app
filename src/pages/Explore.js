import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore({ history }) {
  const redirectExplore = (page) => {
    history.push(page);
  };

  return (
    <div>
      <Header
        title="Explore"
      />
      <button
        data-testid="explore-foods"
        type="button"
        onClick={ () => redirectExplore('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ () => redirectExplore('/explore/drinks') }
      >
        Explore Drinks
      </button>
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Explore;
