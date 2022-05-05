import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from '../context/DrinksContext';
import FoodsContext from '../context/FoodsContext';
import {
  allCategories,
  byCategory,
  categories,
  category,
  cocktailByName,
  mealByName,
  requestApi,
} from '../services/ApiServece';

const FIVE = 5;

function CategoriesButtons({ title }) {
  const { handleDisplayFoodRecipe } = useContext(FoodsContext);
  const { handleDisplayDrinkRecipe } = useContext(DrinksContext);

  const [renderCategories, setRenderCategories] = useState([]);
  const [URL_FOODS] = useState(allCategories);
  const [URL_DRINKS] = useState(categories);
  const [selected, setSelected] = useState('');

  useEffect(() => {
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

  const allCategory = async () => {
    if (title === 'Foods') {
      const { meals } = await requestApi(mealByName, '');
      handleDisplayFoodRecipe(meals);
    }
    if (title === 'Drinks') {
      const { drinks } = await requestApi(cocktailByName, '');
      handleDisplayDrinkRecipe(drinks);
    }
  };

  const toggleCategory = async ({ target }) => {
    const alvo = target.value;
    if (selected !== alvo) {
      setSelected(alvo);
      if (title === 'Foods') {
        const { meals } = await requestApi(byCategory, alvo);
        handleDisplayFoodRecipe(meals);
      }
      if (title === 'Drinks') {
        const { drinks } = await requestApi(category, alvo);
        handleDisplayDrinkRecipe(drinks);
      }
    } else {
      allCategory();
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
      <button
        className="btn btn-secondary col-5 my-1"
        data-testid="All-category-filter"
        onClick={ allCategory }
        type="button"
        value="All"
      >
        All
      </button>
      {renderCategories
        .map(({ strCategory }) => (
          <button
            className="btn btn-secondary col-5 my-1"
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
