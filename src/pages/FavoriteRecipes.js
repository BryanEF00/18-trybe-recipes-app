import React, { useEffect, useState } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import Header from '../components/Header';
import { readInLocalStorage, saveInLocalStorage } from '../services/localStorage';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');

  useEffect(() => {
    if (readInLocalStorage('favoriteRecipes') === null) {
      saveInLocalStorage('favoriteRecipes', []);
      setFavorites(readInLocalStorage('favoriteRecipes'));
    } else {
      setFavorites(readInLocalStorage('favoriteRecipes'));
    }
  }, []);

  const removeFavorite = (id) => {
    const filterFavorite = readInLocalStorage('favoriteRecipes')
      .filter((recipe) => recipe.id !== id);

    saveInLocalStorage('favoriteRecipes', filterFavorite);
    setFavorites(filterFavorite);
  };

  return (
    <div>
      <Header
        title="Favorite Recipes"
      />
      <section>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setCurrentFilter('') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setCurrentFilter('food') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setCurrentFilter('drink') }
        >
          Drinks
        </button>
      </section>
      <section>
        {
          favorites.length > 0
            ? favorites.filter(({ type }) => type.includes(currentFilter))
              .map((data, index) => (
                <FavoriteRecipeCard
                  data={ data }
                  index={ index }
                  key={ data.id }
                  removeFavorite={ removeFavorite }
                />
              ))
            : (<div>List is empty</div>)
        }
      </section>
    </div>
  );
}

export default FavoriteRecipes;
