/* eslint-disable react-hooks/exhaustive-deps */
import copy from 'clipboard-copy';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard';
import RecommendedCarousel from '../components/RecommendedCarousel';
import StartRecipeBtn from '../components/StartRecipeBtn';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { detailsById, requestApi } from '../services/ApiServece';
import { readInLocalStorage, saveInLocalStorage } from '../services/localStorage';

function DetailedDrinks() {
  const [drink, setDrink] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(true);
  const [fullList, setFullList] = useState([]);
  const { id } = useParams();

  const { strDrink, strCategory, strInstructions, strDrinkThumb, strAlcoholic,
  } = drink;

  const ingredients = Object.entries(drink)
    .filter((ingredient) => ingredient[0].includes('Ingredient')
    && ingredient[1]).map((value) => value[1]);
  const measure = Object.entries(drink)
    .filter((ingredient) => ingredient[0].includes('Measure')
    && ingredient[1] !== '').map((value) => value[1]);

  useEffect(() => {
    if (readInLocalStorage('inProgressRecipes') === null) {
      saveInLocalStorage('inProgressRecipes', {
        cocktails: { },
        meals: { },
      });
    } else {
      saveInLocalStorage('inProgressRecipes', readInLocalStorage('inProgressRecipes'));
    }
  }, []);

  useEffect(() => {
    if (readInLocalStorage('favoriteRecipes') === null) {
      saveInLocalStorage('favoriteRecipes', []);
    }

    requestApi(detailsById, id).then(({ drinks }) => setDrink(drinks[0]));

    const setItems = ingredients
      .map((ingredient, index) => `${ingredient} - ${measure[index]}`);
    setFullList(setItems);

    setIsFavorite(readInLocalStorage('favoriteRecipes')
      .some((recipe) => recipe.id === id));
    setIsLoading(false);
  }, [drink]);

  const setFavorites = () => {
    const allFavorites = readInLocalStorage('favoriteRecipes');
    const verify = allFavorites.some((favorite) => favorite.id === id);

    if (verify) {
      const filter = allFavorites.filter((favorite) => favorite.id !== id);
      saveInLocalStorage('favoriteRecipes', filter);
    } else {
      const newFavorite = {
        id,
        type: 'drink',
        nationality: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
      saveInLocalStorage('favoriteRecipes', [...allFavorites, newFavorite]);
    }
  };

  return (
    <div>
      { isLoading
        ? (<Loading />)
        : (
          <div>
            <img
              data-testid="recipe-photo"
              src={ strDrinkThumb }
              alt={ strDrink }
              style={ { height: 100 } }
            />
            <div
              className="d-flex"
            >
              <h3
                data-testid="recipe-title"
              >
                {strDrink}
              </h3>
              <div>
                <button
                  type="button"
                  onClick={ () => {
                    setIsCopied((prev) => !prev);
                    copy(`http://localhost:3000/drinks/${id}`);
                  } }
                >
                  <img
                    data-testid="share-btn"
                    src={ shareIcon }
                    alt="Share Icon"
                  />
                </button>
                {isCopied && 'Link copied!'}
              </div>
              <button
                type="button"
                onClick={ () => {
                  setFavorites();
                  setIsFavorite(!isFavorite);
                } }
              >
                <img
                  data-testid="favorite-btn"
                  src={
                    isFavorite ? blackHeartIcon : whiteHeartIcon
                  }
                  alt="Favorite Heart Icon"
                />
              </button>
            </div>
            <div
              data-testid="recipe-category"
            >
              {strAlcoholic}
            </div>
            <div>
              <h3>Ingredients</h3>
              {
                fullList.map((item, index) => (
                  <RecipeCard
                    key={ item }
                    ingredientLi={ item }
                    index={ index }
                  />
                ))
              }
            </div>
            <div
              data-testid="instructions"
            >
              <h3>Instructions</h3>
              {strInstructions}
            </div>
            <div>
              <h3>Recommended</h3>
              <RecommendedCarousel title="meals" />
            </div>
            <StartRecipeBtn id={ id } title="cocktails" />
          </div>
        ) }
    </div>
  );
}

export default DetailedDrinks;
