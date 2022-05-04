import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { requestApi, fullMealDetailsById } from '../services/ApiServece';
import { saveInLocalStorage, readInLocalStorage } from '../services/localStorage';

function DetailedFoods() {
  const { id } = useParams();
  const endPoint = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const initState = {
    strMealThumb: '',
    strMeal: '',
    strCategory: '',
    strInstructions: '',
    strYoutube: ''
  };
  const [state, altState] = useState(initState);
  const [sugestions, altSugestions] = useState([]);
  const history = useHistory()

  const getSugestions = async () => {
    const pega = await requestApi(endPoint, '');
    await altSugestions(pega.drinks);
    console.log('sus-->', sugestions);
  };
  const getDetails = async () => {
    const data = await requestApi(fullMealDetailsById, id);
    const meal = data.meals[0];
    altState({ ...meal, id });
    const ingredients = Object.entries(meal).filter((meal) => (meal[0].includes('Ingredient')) && meal[1]);
    const quantities = Object.entries(meal).filter((meal) => (meal[0].includes('Measure')) && meal[1]);
    altState((prev) => ({ ...prev, ingredients, quantities }));
  };

  const renderCards = () => {
    if (sugestions.length > 0) {
      const list = sugestions.map((recipe, index) => <RecipeCard data={ { index, ...recipe, drink: false } } />);
      return list.slice(0,6);
    }
  };

  const checkLocal = () => {
    const ongoingRecipes = {
      cocktails: {
      },
      meals: {
      }
    };
    if (readInLocalStorage('inProgressRecipes') === null) {
      saveInLocalStorage('inProgressRecipes', ongoingRecipes);
    }
  }

  const verify = () => {
    checkLocal()
    const { meals } = readInLocalStorage('inProgressRecipes')
    const recipes = Object.keys(meals);
    if (recipes.includes(id)) return true;
    return false
  }

  const startRecipe = () => {
    if ( verify() ) {
      history.push(`/foods/${ id }/in-progress`);
    } else {
      let progress = readInLocalStorage('inProgressRecipes')
      progress.meals[id] = [];
      saveInLocalStorage('inProgressRecipes', progress);
      history.push(`/foods/${ id }/in-progress`);
    }
  };

  const share = () => {
    navigator.clipboard.writeText(document.URL);
  };

  useEffect(() => {
    getDetails();
    getSugestions();
  }, []);

  return (
    <div className="detail">
      <p>PÁGINA DETALHADA DE COMIDAS</p>
      <img alt="receita" data-testid="recipe-photo" src={ state.strMealThumb } />
      <h1 data-testid="recipe-title">{ state.strMeal }</h1>
      <button onClick={ share } type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <h2 data-testid="recipe-category">{ state.strCategory }</h2>
      <hr />
      <h2>Ingredientes</h2>
      <ul>
        {
          state.ingredients && state.ingredients
            .map((li, index) => (
              <li data-testid={ `${index}-ingredient-name-and-measure` }>
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
      <button
        className="start-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ startRecipe }
      >
        { (verify()) ? 'Continue Recipe' : 'START RECIPE' }
      </button>
      <video data-testid="video" src={ state.strYoutube } width="400" controls />
      <div className="sugestion">
        { renderCards() }
      </div>
    </div>
  );
}

export default DetailedFoods;
