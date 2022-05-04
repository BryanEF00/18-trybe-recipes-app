import React, { useEffect, useState } from 'react';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Header from '../components/Header';
import { readInLocalStorage, saveInLocalStorage } from '../services/localStorage';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');

  useEffect(() => {
    if (readInLocalStorage('doneRecipes') === null) {
      saveInLocalStorage('doneRecipes', []);
      setDoneRecipes(readInLocalStorage('doneRecipes'));
    } else {
      setDoneRecipes(readInLocalStorage('doneRecipes'));
    }
  }, []);

  return (
    <div>
      <Header
        title="Done Recipes"
      />
      <section
        className="FavoriteRecipesFilters"
      >
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
          doneRecipes.length > 0
            ? doneRecipes.filter(({ type }) => type.includes(currentFilter))
              .map((data, index) => (
                <DoneRecipesCard
                  data={ data }
                  index={ index }
                  key={ data.id }
                />
              ))
            : (<div>List is empty</div>)
        }
      </section>
    </div>
  );
}

export default DoneRecipes;
