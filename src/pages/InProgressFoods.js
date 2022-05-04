import React, { useEffect, useState } from 'react';
import { fullMealDetailsById, requestApi } from '../services/ApiServece';

function InProgressFoods() {
  const [meal, setMeal] = useState({});
  const inngredienteTest = '52977-ingredient-step';

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
      1
      <img
        data-testid="recipe-photo"
        src={ meal.strMealThumb }
        alt="imagem da receita"
      />
      <h2
        data-testid="recipe-title"
      >
        { meal.strMeal }
      </h2>
      <button
        type="button"
        data-testid="share-btn"
      >
        botão compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favoriar
      </button>
      <h3
        data-testid="recipe-category"
      >
        { meal.strCategory }
      </h3>
      <fieldset
        data-testid={ inngredienteTest }
      >
        ingredientes
      </fieldset>
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
