import PropTypes from 'prop-types';
import React from 'react';
import './DrinkIngredientsCard.css';

function DrinkIngredientsCard({ data: { ingredient: { strIngredient1 }, index } }) {
  return (
    <div
      data-testid={ `${index}-ingredient-card` }
      className="ingredientsCard"
    >
      <img
        data-testid={ `${index}-card-img` }
        className="ingredientCardImg"
        src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
        alt={ strIngredient1 }
      />
      <div
        data-testid={ `${index}-card-name` }
        className="ingredientCardName"
      >
        {strIngredient1}
      </div>
    </div>
  );
}

DrinkIngredientsCard.propTypes = {
  strIngredient1: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default DrinkIngredientsCard;
