/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ButtonFavorite from '../components/buttonFavorit';
import { requestApi, fullMealDetailsById } from '../services/ApiServece';
import { saveInLocalStorage, readInLocalStorage } from '../services/localStorage';

const l = 'l';

function DetailedFoods() {
  const { id } = useParams();
  const [state, altState] = useState({
    strMealThumb: '',
    strMeal: '',
    strCategory: '',
    strInstructions: '',
    strYoutube: '',
  });
  const history = useHistory();

  const ongoingRecipes = {
    cocktails: {
    },
    meals: {
    },
  };

  if (readInLocalStorage('inProgressRecipes') === null) {
    saveInLocalStorage('inProgressRecipes', ongoingRecipes);
  }

  const getDetails = async () => {
    const data = await requestApi(fullMealDetailsById, id);
    const meal = data.meals[0];
    altState({ ...meal, id });
    const ingredients = Object.entries(meal)
      .filter((ingredient) => (ingredient[0].includes('Ingredient')) && ingredient[1]);
    const quantities = Object.entries(meal)
      .filter((ingredient) => (ingredient[0].includes('Measure')) && ingredient[1]);
    altState((prev) => ({ ...prev, ingredients, quantities }));
  };

  const checkLocal = (local) => {
    if (readInLocalStorage(local) === null) {
      saveInLocalStorage(local, []);
    }
  };

  const verifyDone = () => {
    checkLocal('doneRecipes');
    const done = readInLocalStorage('doneRecipes');
    const ids = done.map((recipe) => recipe.id);
    return ids.includes(parseInt(id, 10));
  };

  const verify = () => {
    const { meals } = readInLocalStorage('inProgressRecipes');
    const recipes = Object.keys(meals);
    if (recipes.includes(id)) return true;
    return false;
  };

  const startRecipe = () => {
    if (verify()) {
      history.push(`/foods/${id}/in-progress`);
    } else {
      const progress = readInLocalStorage('inProgressRecipes');
      progress.meals[id] = [];
      saveInLocalStorage('inProgressRecipes', progress);
      history.push(`/foods/${id}/in-progress`);
    }
  };

  const share = () => {
    navigator.clipboard.writeText(document.URL);
    global.alert('Link copied!');
  };

  useEffect(() => {
    getDetails();
  }, []);

  // -----Start recipe button-----------------------------------------------------------------------

  const startBtn = (
    <button
      className="start-btn"
      type="button"
      data-testid="start-recipe-btn"
      onClick={ startRecipe }
    >
      { (verify()) ? 'Continue Recipe' : 'START RECIPE' }
    </button>
  );

  return (
    <div className="detail">
      <p>PÁGINA DETALHADA DE COMIDAS</p>
      <img alt="receita" data-testid="recipe-photo" src={ state.strMealThumb } />
      <h1 data-testid="recipe-title">{ state.strMeal }</h1>
      <button onClick={ share } type="button" data-testid="share-btn">Share</button>
      <ButtonFavorite />
      <h2 data-testid="recipe-category">{ state.strCategory }</h2>
      <hr />
      <h2>Ingredientes</h2>
      <ul>
        {
          state.ingredients && state.ingredients
            .map((li, index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                { `-${li[1]} - ${state.quantities[index][1]}` }
              </li>
            ))
        }
      </ul>
      <hr />
      <h2>Modo de Preparo</h2>
      <p data-testid="instructions">
        { state.strInstructions }
      </p>
      { !verifyDone() && startBtn }
      <video data-testid="video" width="200" controls>
        <source src={ state.strYoutube } type="video/mp4" />
        <track kind="captions" { ...l } />
      </video>
      <div className="sugestion">
        {/* <Sugestions /> */}
      </div>
    </div>
  );
}

export default DetailedFoods;
