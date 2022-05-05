import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { readInLocalStorage, saveInLocalStorage } from '../services/localStorage';

function ListIngredientCard({ banc, title, id }) {
  const [storage, setStorage] = useState({});
  const [ingredientsUsed, setIngredientsUsed] = useState([]);

  useEffect(() => {
    if (readInLocalStorage('inProgressRecipes') === null) {
      const defaultStorage = {
        cocktails: {},
        meals: {},
      };
      saveInLocalStorage('inProgressRecipes', defaultStorage);
      setStorage(defaultStorage);
    } else {
      const verifyLocalStorage = readInLocalStorage('inProgressRecipes');
      const hasItem = Object.keys(verifyLocalStorage[title])
        .some((key) => key === id);

      if (!hasItem) {
        console.log(storage);
      }
    }
  }, []);

  // useEffect(() => {
  //   console.log(storage);
  // }, [storage]);

  function saveStorage() {
    saveInLocalStorage(favoriteRecipes, storage);
  }

  function handleChange({ value, checked }) {
    if (checked) {
      const temp = [...ingredientsUsed, value];

      setIngredientsUsed(temp);
      saveStorage();
    }
  }

  console.log(ingredientsUsed, title, id);

  /*
  useEffect(() => {
  }) */

  const inngredienteTest = '178319-ingredient-step';

  return (
    <div>
      {
        banc.map((item, index) => (
          <div
            key={ index }
            data-testid={ inngredienteTest }
          >
            <input
              type="checkbox"
              value={ item }
              id={ item }
              onChange={ ({ target }) => handleChange(target) }
            />
            { ' ' }
            { item }
          </div>
        ))
      }
    </div>
  );
}

ListIngredientCard.propTypes = {
  banc: PropTypes.arrayOf,
  title: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default ListIngredientCard;
