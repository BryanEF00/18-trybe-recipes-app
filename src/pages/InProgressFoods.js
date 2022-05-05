import React, { useEffect, useState } from 'react';
import { fullMealDetailsById, requestApi } from '../services/ApiServece';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';
import ListIngredientCard from '../components/listIngredientCard';

function InProgressFoods() {
  const [meal, setMeal] = useState({});

  async function searchApi() {
    const temp = await requestApi(fullMealDetailsById, '52977');
    setMeal(temp.meals[0]);
  }

  useEffect(() => {
    searchApi();
  }, []);

  useEffect(() => {
    console.log(meal);
  }, [meal]);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ meal.strMealThumb }
        alt="imagem da receita"
        className="card col-12 shadow p-3 mb-5 bg-body rounded"
      />
      <div>
        <h2
          data-testid="recipe-title"
        >
          { meal.strMeal }
        </h2>
        <button
          type="button"
          className="btn btn-light col-2"
          data-testid="share-btn"
        >
          <img
            src={ ShareIcon }
            alt="share icon"
          />
        </button>
        <button
          type="button"
          className="btn btn-light col-2"
          data-testid="favorite-btn"
        >
          <img
            src={ WhiteHeartIcon }
            alt="compart icon"
          />
        </button>
      </div>
      <h3
        data-testid="recipe-category"
      >
        { meal.strCategory }
      </h3>
      <fieldset>
        <ListIngredientCard
          meal={
            Object.entries(meal).filter((item) => (item[0].includes('Ingredient'))
            && item[1]).map((item) => item[1])
          }
        />
      </fieldset>
      <br />
      <fieldset
        data-testid="instructions"
      >
        { meal.strInstructions }
      </fieldset>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    </div>
  );
}

export default InProgressFoods;
