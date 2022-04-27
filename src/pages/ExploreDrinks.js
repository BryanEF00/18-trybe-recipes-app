import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { randomCocktail, requestApi } from '../services/ApiServece';

function ExploreDrinks({ history }) {
  const redirectExploreFoods = (page) => {
    history.push(page);
  };

  const redirectRandomFood = async () => {
    const getRandomCocktail = await requestApi(randomCocktail, '');
    const { idDrink } = getRandomCocktail.drinks[0];
    history.push(`/drinks/${idDrink}`);
  };

  return (
    <div>
      <Header />
      <div
        className="
          container-fluid
          d-flex
          flex-wrap
          justify-content-around"
      >
        <button
          className="btn btn-outline-dark my-3"
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => redirectExploreFoods('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <button
          className="btn btn-outline-dark my-3"
          data-testid="explore-surprise"
          type="button"
          onClick={ () => redirectRandomFood() }
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExploreDrinks;
