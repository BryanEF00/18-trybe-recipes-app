import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  byIngredient,
  byMainIngredient,
  cocktailByName,
  cocktailsByFirstLetter,
  mealByName,
  mealsByFirstLetter,
  requestApi,
} from '../services/ApiServece';

function SearchBarFoods({ title }) {
  const [itemSearch, setItemSearch] = useState('');
  const [selectSearch, setSelectSearch] = useState();
  const [results, setResults] = useState();

  function getItemSearch({ target }) {
    const valor = target.value;
    setItemSearch(valor);
  }

  function spanAlert() {
    const lengthValor = itemSearch.split('');
    if (selectSearch === 'first-letter' && lengthValor.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  }

  useEffect(() => {
    spanAlert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemSearch]);

  function getSelectSearch({ target }) {
    const valor = target.value;
    setSelectSearch(valor);
  }

  function methodtSearch() {
    if (selectSearch === 'name') {
      if (title === 'Foods') return mealByName;
      if (title === 'Drinks') return cocktailByName;
    }
    if (selectSearch === 'ingredient') {
      if (title === 'Foods') return byMainIngredient;
      if (title === 'Drinks') return byIngredient;
    }
    if (selectSearch === 'first-letter') {
      if (title === 'Foods') return mealsByFirstLetter;
      if (title === 'Drinks') return cocktailsByFirstLetter;
    }
  }

  async function searchApi() {
    const temp = await requestApi(methodtSearch(), itemSearch);
    setResults(temp);
  }

  console.log(results);

  return (
    <fieldset>
      <div>
        <input
          type="text"
          data-testid="search-input"
          id="search-input"
          onChange={ getItemSearch }
        />
      </div>
      <div />
      <div>
        <label
          htmlFor="select-methodSearch"
          onChange={ getSelectSearch }
        >
          <input
            type="radio"
            name="select-methodSearch"
            value="ingredient"
            data-testid="ingredient-search-radio"
          />
          Ingredient
          <input
            type="radio"
            name="select-methodSearch"
            value="name"
            data-testid="name-search-radio"
          />
          Name
          <input
            type="radio"
            name="select-methodSearch"
            value="first-letter"
            data-testid="first-letter-search-radio"
          />
          First letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchApi }
      >
        Search
      </button>
    </fieldset>
  );
}

SearchBarFoods.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default SearchBarFoods;
