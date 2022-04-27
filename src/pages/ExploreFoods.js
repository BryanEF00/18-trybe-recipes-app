import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { requestApi, singleRandomMeal } from '../services/ApiServece';

function ExploreFoods({ history }) {
  const redirectExploreFoods = (page) => {
    history.push(page);
  };

  const redirectRandomFood = async () => {
    const getRandomMeal = await requestApi(singleRandomMeal, '');
    const { idMeal } = getRandomMeal.meals[0];
    history.push(`/foods/${idMeal}`);
  };

  return (
    <div>
      <Header />
      <button
        data-testid="explore-by-ingredient"
        type="button"
        onClick={ () => redirectExploreFoods('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>
      <button
        data-testid="explore-by-nationality"
        type="button"
        onClick={ () => redirectExploreFoods('/explore/foods/nationalities') }
      >
        By Nationality
      </button>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ () => redirectRandomFood() }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

ExploreFoods.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExploreFoods;
