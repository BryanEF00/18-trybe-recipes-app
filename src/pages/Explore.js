import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore({ history }) {
  const redirectExplore = (page) => {
    history.push(page);
  };

  return (
    <div style={ { height: '600px' } }>
      <Header />
      <div className="container-fluid d-flex justify-content-around">
        <button
          className="btn btn-outline-dark my-3"
          data-testid="explore-foods"
          type="button"
          onClick={ () => redirectExplore('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          className="btn btn-outline-dark my-3"
          data-testid="explore-drinks"
          type="button"
          onClick={ () => redirectExplore('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Explore;
