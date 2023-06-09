import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CategoriesButtons from '../components/CategoriesButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodsContext from '../context/FoodsContext';
import { mealByName, requestApi } from '../services/ApiServece';

function Foods() {
  const { displayFoodRecipe, handleDisplayFoodRecipe } = useContext(FoodsContext);
  const TOTAL_SIZE = 12;
  const history = useHistory();

  useEffect(() => {
    async function firstRender() {
      const { meals } = await requestApi(mealByName, '');
      handleDisplayFoodRecipe(meals);
    }
    if (displayFoodRecipe.length === 0) {
      firstRender();
    }
  }, []);

  return (
    <div>
      <Header
        title="Foods"
        withSearchButton
      />
      <div
        className="d-flex flex-row flex-wrap justify-content-around"
      >
        <CategoriesButtons title="Foods" />
        {
          displayFoodRecipe.length > 0
        && displayFoodRecipe.slice(0, TOTAL_SIZE)
          .map(({ idMeal, strMeal, strMealThumb }, index) => (
            <button
              data-testid={ `${index}-recipe-card` }
              className="card col-5 shadow p-3 mb-5 bg-body rounded"
              key={ idMeal }
              type="button"
              onClick={ () => history.push(`/foods/${idMeal}`) }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img-top"
                src={ strMealThumb }
                alt={ strMeal }
                style={ { height: 100 } }
              />
              <div
                data-testid={ `${index}-card-name` }
                className="card-text"
              >
                {strMeal}
              </div>
            </button>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
