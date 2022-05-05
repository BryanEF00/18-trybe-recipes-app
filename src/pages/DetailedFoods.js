import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { requestApi, fullMealDetailsById } from '../services/ApiServece';
import { saveInLocalStorage, readInLocalStorage } from '../services/localStorage';
import Heart from '../images/blackHeartIcon.svg';
import FullHeart from '../images/whiteHeartIcon.svg';

const l = 'l';

function DetailedFoods() {
  const { id } = useParams();
  const endPoint = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const initState = {
    strMealThumb: '',
    strMeal: '',
    strCategory: '',
    strInstructions: '',
    strYoutube: '',
  };
  const [state, altState] = useState(initState);
  const [sugestions, altSugestions] = useState([]);
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

  const getSugestions = async () => {
    const pega = await requestApi(endPoint, '');
    await altSugestions(pega.drinks);
  };
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

  const renderCards = () => {
    if (sugestions.length > 0) {
      const list = sugestions
        .map((recipe, index) => (
          <RecipeCard key={ index } data={ { index, ...recipe, drink: false } } />
        ));
      const limit = 6;
      return list.slice(0, limit);
    }
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

  const verifyFav = () => {
    checkLocal('favoriteRecipes');
    const fav = readInLocalStorage('favoriteRecipes');
    const ids = fav.map((recipe) => recipe.id);
    return (ids.includes(parseInt(id, 10)) || ids.includes((id)));
  };

  const [isFav, setFav] = useState(verifyFav());

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
    alert('Link copied!');
  };

  useEffect(() => {
    getDetails();
    getSugestions();
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

  // -----Favorite button----------------------------------------------------------------------------

  const favIcon = () => {
    if (isFav) {
      return <img alt="Heart" src={ Heart } />;
    }
    return <img alt="FullHeart" src={ FullHeart } />;
  };

  const removeFavorite = (index) => {
    const filterFavorite = readInLocalStorage('favoriteRecipes')
      .filter((recipe) => recipe.id !== index);

    saveInLocalStorage('favoriteRecipes', filterFavorite);
    setFav(verifyFav());
  };

  const addFavorite = (index) => {
    const favorites = readInLocalStorage('favoriteRecipes');
    saveInLocalStorage('favoriteRecipes', [...favorites, { id: index }]);
    setFav(verifyFav());
  };

  const favorite = () => {
    const fav = verifyFav();
    if (fav) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div className="detail">
      <p>PÁGINA DETALHADA DE COMIDAS</p>
      <img alt="receita" data-testid="recipe-photo" src={ state.strMealThumb } />
      <h1 data-testid="recipe-title">{ state.strMeal }</h1>
      <button onClick={ share } type="button" data-testid="share-btn">Share</button>
      <button
        type="button"
        data-testid="favorite-btn"
        className="favBtn"
        onClick={ favorite }
      >
        { favIcon() }
      </button>
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
        { renderCards() }
      </div>
    </div>
  );
}

export default DetailedFoods;
