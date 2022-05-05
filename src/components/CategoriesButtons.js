import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from '../context/DrinksContext';
import FoodsContext from '../context/FoodsContext';
import {
  allCategories,
  byCategory,
  categories,
  category,
  requestApi,
} from '../services/ApiServece';

const FIVE = 5;

function CategoriesButtons({ title }) {
  const { handleDisplayFoodRecipe } = useContext(FoodsContext);
  const { handleDisplayDrinkRecipe } = useContext(DrinksContext);

  const [renderCategories, setRenderCategories] = useState([]);
  const [URL_FOODS] = useState(allCategories);
  const [URL_DRINKS] = useState(categories);

  useEffect(() => {
    console.log('title', title);

    async function getCategories() {
      if (title === 'Foods') {
        const { meals } = await requestApi(URL_FOODS, 'list');
        const temp = meals.slice(0, FIVE);
        setRenderCategories(temp);
      } else {
        const { drinks } = await requestApi(URL_DRINKS, 'list');
        const temp = drinks.slice(0, FIVE);
        setRenderCategories(temp);
      }
    }
    getCategories();
  }, []);

  const toggleCategory = async ({ target }) => {
    const alvo = target.value;
    console.log(alvo);
    if (title === 'Foods') {
      const { meals } = await requestApi(byCategory, alvo);
      handleDisplayFoodRecipe(meals);
    }
    if (title === 'Drinks') {
      const { drinks } = await requestApi(category, alvo);
      handleDisplayDrinkRecipe(drinks);
    }
  };

  return (
    <div
      className="
      mb-2
      container-fluid
      d-flex
      flex-row
      flex-wrap
      justify-content-around"
    >
      {renderCategories
        .map(({ strCategory }) => (
          <button
            className="btn btn-secondary col-6 my-1"
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
            onClick={ toggleCategory }
            type="button"
            value={ strCategory }
          >
            {strCategory}
          </button>
        ))}
    </div>
  );
}

CategoriesButtons.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default CategoriesButtons;
