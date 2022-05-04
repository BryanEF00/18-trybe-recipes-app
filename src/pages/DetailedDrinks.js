import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { requestApi, detailsById } from '../services/ApiServece';

function DetailedDrinks() {
  const { id } = useParams();
  const endPoint = 'www.themealdb.com/api/json/v1/1/search.php?s=';
  const initState = {
    strDrinkThumb: '',
    strDrink: '',
    strCategory: '',
    strInstructions: '',
    strAlcoholic: '',
  };
  const [state, altState] = useState(initState);
  const [sugestions, altSugestions] = useState([]);

  const getSugestions = async () => {
    const pega = await requestApi(endPoint, '');
    await altSugestions(pega.meals);
  };
  const getDetails = async () => {
    const data = await requestApi(detailsById, id);
    const drink = data.drinks[0];
    console.log(drink);
    altState({ ...drink });
    const ingredients = Object.entries(drink).filter((meal) => (meal[0].includes('Ingredient')) && meal[1]);
    const quantities = Object.entries(drink).filter((meal) => (meal[0].includes('Measure')) && meal[1]);
    altState((prev) => ({ ...prev, ingredients, quantities }));
  };

  const renderCards = () => {
    if (sugestions.length > 0) {
      const list = sugestions.map((recipe, index) => <RecipeCard data={ { index, ...recipe, drink: true } } />);
      return list.slice(0,6);
    }
  };

  useEffect(() => { getDetails(); getSugestions(); }, []);

  return (
    <div className="detail">
      <img alt="receita" data-testid="recipe-photo" src={ state.strDrinkThumb } />
      <h1 data-testid="recipe-title">{ state.strDrink }</h1>
      <button onClick={ getSugestions } type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <span data-testid="recipe-category">
        <h2>{ state.strCategory }</h2>
        <h3>{ state.strAlcoholic }</h3>
      </span>
      <hr />
      <h2>Ingredientes</h2>
      <ul>
        {
          state.ingredients && state.ingredients.map((li, index) => <li data-testid={ `${index}-ingredient-name-and-measure` }>{ `-${li[1]} - ${state.quantities[index][1]}` }</li>)
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
      >
        START RECIPE
      </button>
      <div className="sugestion">
        { renderCards() }
      </div>
    </div>
  );
}

export default DetailedDrinks;
