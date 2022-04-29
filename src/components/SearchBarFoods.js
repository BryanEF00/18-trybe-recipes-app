import React from 'react';

function SearchBarFoods() {
  return (
    <fieldset>
      <div>
        <input
          type="text"
          data-testid="search-input"
          id="search-input"
        />
      </div>
      <div />
      <div>
        <label
          htmlFor="select-ingredient"
        >
          <input
            type="radio"
            name="select-ingredient"
            value="name"
            data-testid="ingredient-search-radio"
          />
          Name
          <input
            type="radio"
            name="select-ingredient"
            value="ingredient"
            data-testid="name-search-radio"
          />
          Ingredient
          <input
            type="radio"
            name="select-ingredient"
            value="nationaldate"
            data-testid="first-letter-search-radio"
          />
          Frist Letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </fieldset>
  );
}

export default SearchBarFoods;
