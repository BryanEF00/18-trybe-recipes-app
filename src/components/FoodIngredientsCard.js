import PropTypes from 'prop-types';
import React from 'react';
import './FoodIngredientsCard.css';

function FoodIngredientsCard({ data: { ingredient: { strIngredient }, index } }) {
  return (
    <div
      data-testid={ `${index}-ingredient-card` }
      className="ingredientsCard"
    >
      <img
        data-testid={ `${index}-card-img` }
        className="ingredientCardImg"
        src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
        alt={ strIngredient }
      />
      <div
        data-testid={ `${index}-card-name` }
        className="ingredientCardName"
      >
        {strIngredient}
      </div>
    </div>
  );
}

FoodIngredientsCard.propTypes = {
  strIngredient: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default FoodIngredientsCard;
