import React from 'react';
import PropTypes from 'prop-types';

function ListIngredientCard({ meal }) {
  const inngredienteTest = '52977-ingredient-step';
  return (
    <>
      { meal.strIngredient1 }
      { ' ' }
      <input
        type="checkbox"
        data-testid={ inngredienteTest }
        value={ meal.strIngredient1 }
      />
    </>
  );
}

ListIngredientCard.propTypes = {
  title: PropTypes.string,
  withSearchButton: PropTypes.bool,
}.isRequired;

export default ListIngredientCard;
