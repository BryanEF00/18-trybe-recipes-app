/* eslint-disable react-hooks/exhaustive-deps */
import copy from 'clipboard-copy';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import InProgressCard from '../components/InProgressCard';
import Loading from '../components/Loading';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { detailsById, requestApi } from '../services/ApiServece';
import { readInLocalStorage, saveInLocalStorage } from '../services/localStorage';

function InProgressDrinks() {
  const [drink, setDrink] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(true);
  const [fullList, setFullList] = useState([]);
  const [storage, setStorage] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const ingredients = Object.entries(drink)
    .filter((ingredient) => ingredient[0].includes('Ingredient')
    && ingredient[1]).map((value) => value[1]);
  const measure = Object.entries(drink)
    .filter((ingredient) => ingredient[0].includes('Measure')
    && ingredient[1] !== '').map((value) => value[1]);

  useEffect(() => {
    if (readInLocalStorage('favoriteRecipes') === null) {
      saveInLocalStorage('favoriteRecipes', []);
    }
    if (readInLocalStorage('inProgressRecipes') === null
    || Object.keys(readInLocalStorage('inProgressRecipes').cocktails).length === 0) {
      setStorage(
        {
          cocktails: { [id]: [] },
          meals: { },
        },
      );
    } else {
      setStorage(readInLocalStorage('inProgressRecipes'));
    }

    requestApi(detailsById, id).then(({ drinks }) => setDrink(drinks[0]));

    const setItems = ingredients
      .map((ingredient, index) => `${ingredient} - ${measure[index]}`);
    setFullList(setItems);

    setIsFavorite(readInLocalStorage('favoriteRecipes')
      .some((recipe) => recipe.id === id));
    setIsLoading(false);
  }, [drink]);

  useEffect(() => {
    saveInLocalStorage('inProgressRecipes', storage);
  }, [storage]);

  const { strCategory, strAlcoholic, strDrink, strDrinkThumb, strInstructions } = drink;

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
              {strCategory}
            </div>
            <div>
              Ingredients
              {
                fullList.map((item, index) => (
                  <InProgressCard
                    key={ item }
                    ingredientLi={ item }
                    index={ index }
                    title="cocktails"
                    readStorage={ [storage, setStorage] }
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
            <button
              data-testid="finish-recipe-btn"
              type="button"
              disabled={ storage.cocktails[id].length !== fullList.length }
              onClick={ () => history.push('/done-recipes') }
            >
              Finish
            </button>
          </div>
        ) }
    </div>
  );
}

export default InProgressDrinks;
