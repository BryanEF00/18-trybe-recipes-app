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
  const [results, setResults] = useState([]);
  const [onAlert, setOnAlert] = useState(false);

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

  function getIdResults() {
    if (onAlert === true && results.length === 0) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (results.length === 1) {
      console.log(1);
      if (title === 'Foods') window.location.href = `/foods/${results[0].idMeal}`;
      if (title === 'Drinks') window.location.href = `/drinks/${results[0].idDrink}`;
    }
  }

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
    if (title === 'Foods') setResults(temp.meals);
    if (title === 'Drinks') setResults(temp.drinks);
    setOnAlert(true);
  }

  useEffect(() => {
    spanAlert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemSearch]);

  useEffect(() => {
    getIdResults();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

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