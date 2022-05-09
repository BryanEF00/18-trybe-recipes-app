import PropTypes from 'prop-types';
import React from 'react';
import './InProgressCard.css';

function RecipeCard({ index, ingredientLi }) {
  return (
    <div
      data-testid={ `${index}-ingredient-name-and-measure` }
    >
      {ingredientLi}
    </div>
  );
}

RecipeCard.propTypes = {
  ingredientLi: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default RecipeCard;
